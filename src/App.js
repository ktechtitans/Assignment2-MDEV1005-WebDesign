import React from 'react';
import './App.css';
import Auth from './Components/Auth'; // Import the Auth component
import Dashboard from  './Components/Dashboard';

function App() {
  return (
    <div className="App">
      {/* Render the Auth Component */}
      <Auth />
      <Dashboard />
    </div>
  );
}

export default App;
