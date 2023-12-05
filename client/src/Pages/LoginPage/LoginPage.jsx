import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import logoImage from '../../assets/logo4.png'
import axios from 'axios';

function Login() {

    const REDIRECT_URI = "http://localhost:5173/";
    const RESPONSE_TYPE = "token";
    const scope = ['playlist-modify-private', 'playlist-modify-public'];
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${scope.join("%20")}`;

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([])

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

    const searchArtists = async (e) => {
        e.preventDefault();
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
        setArtists(data.artists.items)
    }


    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt="" /> : <div>No Image</div>}
                {artist.name}
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
                <a onClick={logout} className='login-button'>Connect Spotify</a>
            }
            {token &&
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)} />
                    <button type="submit">Search</button>
                </form>}

            {renderArtists()}
        </div>
    )

}

export default Login;