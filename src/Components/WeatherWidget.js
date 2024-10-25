import { useState, useEffect } from "react"; // Import React hooks
import axios from "axios"; // Import Axios for making HTTP requests
import "./Weather.css"; // Import the CSS file for styling

// WeatherWidget component to display weather information
function WeatherWidget() {
  // State to hold the weather data
  const [weather, setWeather] = useState(null);
  // State to hold any error messages
  const [error, setError] = useState(null);

  // useEffect hook to fetch weather data when the component mounts
  useEffect(() => {
    // Asynchronous function to fetch weather data
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=65aa8609c19637a62446f19bbbabf147&units=metric`
        );
        setWeather(data);
      } catch (err) {
        setError("Failed to fetch weather data.");
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-widget">
      {error && <p>{error}</p>}
      {weather ? (
        <>
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </>
      ) : (
        <p className="loading">Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherWidget;