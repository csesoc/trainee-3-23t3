import React, { useEffect, useState } from 'react';
import './GeneratorPage.css';
import axios from 'axios';
import Fuse from 'fuse.js';

function GeneratorPage() {

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      // extracting the token from the url
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token);
    }
    setToken(token);

  }, []);

  const searchTracks = async (e) => {
    e.preventDefault();

    // first we get the users top artists - from this we can extract top genres and top artists they listen to
    const res1 = await axios.get("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: '50',
        time_range: 'medium_term'
      },
    })

    // here getting the users top songs and extracting the artists from these songs
    const res5 = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: '50',
        time_range: 'medium_term'
      },
    })
    let trackArtists = []
    res5.data.items.map(item => {
      for (let artist of item.artists) {
        trackArtists.push(artist.id);
      }
    })

    let topGenres = {};
    let topArtists = [];

    let minPopularity = 100;

    for (const item of res1.data.items) {
      if (searchKey.length <= 0) {
        item.genres.forEach(genre => {
          genre = genre.replace(/\s+/g, "-");
          if (topGenres[genre]) {
            topGenres[genre]++;
          } else {
            topGenres[genre] = 1;
          }
        });
      }

      topArtists.push(item.id);
      if (item.popularity < minPopularity) {
        minPopularity = item.popularity;
      }
    }

    topArtists.concat(topArtists);
    topArtists = Array.from(new Set(topArtists));

    let sortedGenres = [];

    for (let genre in topGenres) {
      sortedGenres.push([genre, topGenres[genre]]);
    }
    sortedGenres.sort((a, b) => b[1] - a[1]);
    topGenres = sortedGenres.map(genre => genre[0]);

    // combing user input into our topGenres so we can fuzzy search against those as well
    if (searchKey.length > 0) {
      for (let word in searchKey.split(' ')) {
        topGenres.push(word);
      }
    }

    // getting the genre seeds that the recommender API accepts so that we can filter our users top genres into these
    const res2 = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })

    let availableGenres = res2.data.genres;

    // using Fuse fuzzy search to find approximate matches between the users genres and the available genre seeds above
    const fuse = new Fuse(availableGenres, { keys: ['label'], threshold: 0.2 });

    let filteringGenres = [];

    topGenres.forEach(genre1 => {
      const result = fuse.search(genre1);
      if (result.length > 0) {
        filteringGenres.push(result[0].item);
      }
    });

    // using the recommender API with our users top genres and artists => only allows us to choose 5 seeds
    // in total from seed_artists and seed_genres combined
    const res3 = await axios.get("https://api.spotify.com/v1/recommendations", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        seed_artists: ''.concat(topArtists.sort(() => Math.random() - 0.5).slice(0, 3)),
        seed_genres: ''.concat(filteringGenres.sort(() => Math.random() - 0.5).slice(0, 2)),
        min_popularity: `${minPopularity}`,
        limit: '20', // TODO: replace this with input from slider
      },
    })

    setSearchKey('');
    setTracks(res3.data.tracks);
  }

  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };


  const renderTracks = () => {
    console.log(tracks.artists)
    return (
      <div className="tracks">
        {tracks.map(
          (track, index) => {
            return (
              <div
                className="row"
                key={track.id}
              >
                <div className="col">
                  <span>{index + 1}</span>
                </div>
                <div className="col detail">
                  <div className="image">
                    <img src={track.album.images[0].url} alt="track" />
                  </div>
                  <div className="info">
                    <span className="name">{track.name}</span>
                    <span>{track.artists.map(artist => artist.name).join(", ")}</span>
                  </div>
                </div>
                <div className="col">
                  <span>{track.album.name}</span>
                </div>
                <div className="col">
                  <span>{msToMinutesAndSeconds(track.duration_ms)}</span>
                </div>
              </div>
            );
          }
        )}
      </div>
    )
  }


  return (
    <div className="app-container">
      <header className="header">
        <a href='/' className='header-title' style={{ color: '#1ED760' }}>Moodify</a>
        <nav className="nav">
          <a href="/" style={{ color: '#1ED760' }} >Home</a>
          <a href="/about" style={{ color: '#1ED760' }} >About</a>
          {/* Add more navigation links */}
        </nav>
      </header>
      <main className="main-content">
        <h2 style={{ color: '#1ED760', fontSize: '25px' }} >Mood Generator</h2>
        <p style={{ color: 'white', fontSize: '16px' }}>Describe what mood you're in. Try to be as specific as possible.</p>
        {token && token.length > 0 &&
          <form onSubmit={searchTracks}>
            <input
              type="text"
              placeholder="E.g., generate a playlist for sad boi hours..."
              className="mood-input" onChange={e => setSearchKey(e.target.value)} value={searchKey} />
            <button className="generate-button" type="submit">Generate Playlist</button>
          </form>}
        {tracks.length > 0 ? renderTracks() :
          <div className="example-moods">
            <p style={{ color: '#1ED760', fontSize: '20px' }}> Example Moods:</p>
            <ul style={{ color: 'white', fontSize: '16px' }}>
              <li>Happy</li>
              <li>Chill</li>
              <li>Energetic</li>
              {/* Add more example moods */}
            </ul>
          </div>
        }
      </main>
      <footer className="footer">
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
        {/* Add more footer links */}
      </footer>

    </div>
  );
};

export default GeneratorPage