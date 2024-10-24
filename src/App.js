import React from 'react';
import './App.css'; // Importing the CSS file for styling
import Auth from './Components/Auth'; // Import the Auth component for authentication
import Dashboard from './Components/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <div className="App">
      {/* Render the Auth component for user authentication */}
      <Auth />
      
      {/* Render the Dashboard component for displaying the main content */}
      <Dashboard />
    </div>
  );
}

export default App; // Export the App component as the default export
