import React from 'react'
import './GeneratorPage.css'

function GeneratorPage() {
    return (
        <div className="app-container">
          <header className="header">
            <h1 className="centered-text">Playlistable.io</h1>
            {/* <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              {/* Add more navigation links }
            </nav> */}
          </header>
          <main className="main-content">
            <h2>Mood Generator</h2>
            <p>Describe what mood you're in. Try to be as specific as possible.</p>
            <input
              type="text"
              placeholder="E.g., happy, relaxed, energetic..."
              className="mood-input"
            />
            <button className="generate-button">Generate Playlist</button>
            <div className="example-moods">
              <p>Example Moods:</p>
              <ul>
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
        </div>
      );
    };

export default GeneratorPage