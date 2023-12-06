import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import logoImage from '../../assets/logo4.png'
import axios from 'axios';

function Login() {

    const REDIRECT_URI = "http://localhost:5173/";
    const CLIENT_ID = "565694e7f53e4306860cdf425e9326d2";
    const RESPONSE_TYPE = "token";
    const scope = ['playlist-modify-private', 'playlist-modify-public'];
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${scope.join("%20")}`;
    
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

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    }

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
        <div className='login-page-container'>
            <div className="logo-container">
                <img src={logoImage} className="moodify-logo"></img>
                <a href='/home' className='header-title'>Moodify</a>
            </div>
            {!token ?
                <a href={authUrl} className='login-button'>Connect Spotify</a>
                :
                <a onClick={logout} className='login-button'>Logout</a>
            }
            {token &&
                <form onSubmit={searchTracks}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)} />
                    <button type="submit">Search</button>
                </form>}

            {renderTracks()}
        </div>
    )

}

export default Login;