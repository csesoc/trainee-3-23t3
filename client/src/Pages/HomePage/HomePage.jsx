import React, { useState, useEffect } from 'react';
import './HomePage.css';
import SpotifyLogo from '../../assets/spotifylogo.webp';
import MoodifyLogo from '../../assets/moodify.png';

export default function HomePage() {
    const [token, setToken] = useState(false);

    useEffect(() => {
        let localToken = window.localStorage.getItem("token");
        setToken(localToken !== null);
    }, [token])

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setToken(false);
    }

    return (
        <div className="app-container">
            <div className="top-right">made for <img src={SpotifyLogo}></img></div>
            <div className="center-left"> <img src={MoodifyLogo}></img></div>
            <hr className="small-line first-line" />
            <div className="step1-text">Step 1</div>
            <hr className="small-line second-line" />
            <div className="step2-text">Step 2</div>
            <hr className="small-line third-line" />
            <div className="step3-text">Step 3</div>
            <hr className="small-line fourth-line" />
            <div className="step4-text">Step 4</div>
            <div className="step1-description">Connect your Spotify</div>
            <div className="step2-description">Select your mood</div>
            <div className="step3-description">Generate customised</div>
            <div className="step3-description-2">playlist</div>
            <div className="step4-description">Immerse yourself</div>
            <div className="listening-text">Listening is </div>
            <div className="everything-text">everything . </div>
            {!token ?
                <a className="get-started-button" href="/login">Login to Spotify</a>
                : <button className="get-started-button" onClick={handleLogout}>Logout from Spotify</button>
            }
            <div className="feeling-text">Unleash Your Emotions, Elevate Your Playlist with Moodify.</div>
        </div>
    )
}
