import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import GeneratorPage from './Pages/GeneratorPage/GeneratorPage';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <GeneratorPage/>
    </div>
  );
}

export default App;