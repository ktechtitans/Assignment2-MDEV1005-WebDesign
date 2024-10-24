import React from "react";
import UserProfile from "./UserProfile";
import WeatherWidget from "./WeatherWidget"; // Custom API Widget Example
import "./Dashboard.css"; // Import the CSS file

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="user-profile">
        <UserProfile />
      </div>
      <div className="weather-widget">
        <WeatherWidget />
      </div>
      {/* Other Widgets and Tools */}
    </div>
  );
}

export default Dashboard;
