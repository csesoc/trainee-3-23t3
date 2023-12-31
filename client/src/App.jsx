import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from './Components/Layout';
import Login from './Pages/LoginPage/LoginPage'
import Home from './Pages/HomePage/HomePage';
import GeneratorPage from './Pages/GeneratorPage/GeneratorPage';
import PlaylistPage from './Pages/PlaylistPage/PlaylistPage'
import FriendsPage from './Pages/FriendsPage/FriendsPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/generate" element={<Layout><GeneratorPage /></Layout>} />
          <Route exact path="/playlists" element={<Layout><PlaylistPage /></Layout>} />
          <Route exact path="/friends" element={<Layout><FriendsPage /></Layout>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;