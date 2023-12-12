import React, { useEffect, useState } from 'react';
import './GeneratorPage.css';
import axios from 'axios';

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

  }, [])

  const searchTracks = async (e) => {
    e.preventDefault();

    // example api call - rn seed artists are travis + drake with genre suited towards gym music
    const { data } = await axios.get("https://api.spotify.com/v1/recommendations", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        seed_artists: '0Y5tJX1MQlPlqiwlOH1tJY,3TVXtAsR1Inumwj472S9r4',
        seed_genres: 'rap,hip-hop,workout',
        min_energy: '0.9',
        min_popularity: '60'
      },
    })
    console.log(data);

    setTracks(data.tracks)
  }


  const renderTracks = () => {
    return tracks.map(track => (
      <div key={track.name}>
        {track.album.images.length ? <img width={"100%"} src={track.album.images[0].url} alt="" /> : <div>No Image</div>}
        {track.name}
      </div>

    ))
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
        

        <input
          type="text"
          placeholder="E.g., generate a playlist for sad boi hours..."
          className="mood-input"
        />
        <button className="generate-button">Generate Playlist</button>
        <div className="example-moods">
          <p style={{ color: '#1ED760', fontSize: '20px' }}> Example Moods:</p>
          <ul style={{ color: 'white', fontSize: '16px' }}>
            <li>Happy</li>
            <li>Chill</li>
            <li>Energetic</li>
            {/* Add more example moods */}
          </ul>
        </div>
      </main>
      <footer className="footer">
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
        {/* Add more footer links */}
      </footer>
      {token && token.length > 0 &&
        <form onSubmit={searchTracks}>
          <input type="text" onChange={e => setSearchKey(e.target.value)} />
          <button type="submit">Search</button>
        </form>}

      {renderTracks()}
    </div>
  );
};

export default GeneratorPage