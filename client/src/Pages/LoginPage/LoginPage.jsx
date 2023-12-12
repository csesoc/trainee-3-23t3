import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import logoImage from '../../assets/logo4.png'

function Login() {

    const REDIRECT_URI = "http://localhost:5173/generate";
    const CLIENT_ID = "cfc176bf55d14b62b23e8208cae6f7c8";
    const RESPONSE_TYPE = "token";
    const scope = ['playlist-modify-private', 'playlist-modify-public', 'user-top-read'];
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${scope.join("%20")}`;

    const [token, setToken] = useState("");

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


    return (
        <div className='login-page-container'>
            <div className="logo-container">
                <img src={logoImage} className="moodify-logo"></img>
                <a href='/home' className='header-title'>Moodify</a>
            </div>
            {!token ?
                <a href={authUrl} className='login-button'>Connect Spotify</a>
                :
                <a onClick={handleLogout} className='login-button'>Logout</a>
            }
        </div>
    )

}

export default Login;