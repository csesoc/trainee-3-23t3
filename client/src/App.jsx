import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Layout from './Components/Layout';
import Home from './Pages/HomePage/HomePage'
import GeneratorPage from './Pages/GeneratorPage/GeneratorPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout><Home /></Layout>} />
          <Route exact path="/generate" element={<Layout><GeneratorPage /></Layout>} />
          {/* <Route exact path="/friends" element={<Layout><FriendsPage /></Layout>} />
          <Route exact path="/playlists" element={<Layout><PlaylistPage /></Layout>} /> */}
        </Routes>
      </Router>
    </div >
  );
}

export default App;