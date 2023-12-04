import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import GeneratorPage from './Pages/GeneratorPage/GeneratorPage';

function App() {
  return (
    <div className="App" >
      <div className='sidebar'>
        <Sidebar />
      </div>
      {
        // in future replace this with the home page as default
        // then within each component we can seperately render sidebar
      }
      <div className='generator-page'>
        <GeneratorPage />
      </div>
    </div>
  );
}

export default App;