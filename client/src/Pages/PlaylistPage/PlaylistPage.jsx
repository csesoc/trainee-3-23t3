import React from 'react'
import './PlaylistPage.css'

function PlaylistPage({ code }) {

  return (
    <div className="app-container">
      <header className="header">
        <a href='/' className='header-title'>Moodify: Your Playlists</a>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          {/* Add more navigation links */}
        </nav>
      </header>
      <main className="main-content">
        <h1> <p> You Have No Playlist. Click Playlist Generator to Get Started! </p></h1>
      </main>
      <footer className="footer">
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
        {/* Add more footer links */}
      </footer>
    </div>
  );
};

export default PlaylistPage