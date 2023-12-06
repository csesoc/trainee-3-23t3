import React from 'react'
import './GeneratorPage.css'

function GeneratorPage({ code }) {

  return (
    <div className="app-container">
      <div className="all-content">
        <header className="header">
          <a href='/' className='header-title'>Playlistable.io</a>
        </header>
        <main className="main-content">
          <div className="content-wrapper">
            <h2>Mood Generator</h2>
            <p>Describe what mood you're in. Try to be as specific as possible.</p>
          </div>
          <div className ="search-container">
            <input
            type="text"
            placeholder="E.g., generate a playlist for sad boi hours..."
            className="mood-input"
            />
            <button className="generate-button">Generate Playlist</button>
          </div>
            <p className='example-text'>Example Moods:</p>
          <div className="example-moods">
            <ul>
              <button>Happy</button>
              <button>Chill</button>
              <button>Energetic</button>
              {/* Add more example moods */}
            </ul>
          </div>
        </main>
      </div>
        <footer className="footer">
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
          {/* Add more footer links */}
        </footer>
    </div>
  );
};

export default GeneratorPage