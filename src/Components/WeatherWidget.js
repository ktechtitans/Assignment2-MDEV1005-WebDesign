import { useState, useEffect } from "react";
import axios from "axios";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
          <p>Temperature: {weather.main.temp}°C</p> {/* Displaying temperature */}
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
