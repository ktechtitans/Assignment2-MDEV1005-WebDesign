// Dashboard.js
import React from "react"; // Import React
import UserProfile from "./UserProfile"; // Import the UserProfile component
import WeatherWidget from "./WeatherWidget"; // Import the WeatherWidget component
import "./Dashboard.css"; // Import CSS for styling the dashboard

// Define the Dashboard component
function Dashboard() {
  // Render the dashboard layout
  return (
    <div className="dashboard"> {/* Container for the dashboard */}
      <div className="user-profile"> {/* Container for the user profile */}
        <UserProfile /> {/* Render the UserProfile component */}
      </div>
      <div className="weather-widget"> {/* Container for the weather widget */}
        <WeatherWidget /> {/* Render the WeatherWidget component */}
      </div>
    </div>
  );
}

// Export the Dashboard component for use in other parts of the application
export default Dashboard;
