import React from 'react';
import './HomePage.css';
import SpotifyLogo from '../assets/spotifylogo.webp';
import MoodifyLogo from '../assets/moodify.png';

export default function HomePage() {
    return (
        <>
            <div class="top-right">made for <img src={SpotifyLogo}></img></div>
            <div class="center-left"> <img src={MoodifyLogo}></img></div>
            <hr class="small-line first-line" />
            <div class="step1-text">Step 1</div>
            <hr class="small-line second-line" />
            <div class="step2-text">Step 2</div>
            <hr class="small-line third-line" />
            <div class="step3-text">Step 3</div>
            <hr class="small-line fourth-line" />
            <div class="step4-text">Step 4</div>
            <div class="step1-description">Connect your Spotify</div>
            <div class="step2-description">Select your mood</div>
            <div class="step3-description">Generate customised</div>
            <div class="step3-description-2">playlist</div>
            <div class="step4-description">Immerse yourself</div>
            <div class="listening-text">Listening is </div>
            <div class="everything-text">everything . </div>
            <button class="get-started-button">Get Started</button>
            <div class="feeling-text">Unleash Your Emotions, Elevate Your Playlist with Moodify.</div>
        </>
    )
}
