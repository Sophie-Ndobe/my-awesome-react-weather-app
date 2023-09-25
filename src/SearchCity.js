import React, { useState } from "react";
import axios from "axios";
import "./SearchCity.css";
import WeatherUpdate from "./WeatherUpdate";
import Forecast from "./Forecast";

export default function SearchCity() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8342a5044534040e24d2802ce4fcc6ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(displayWeather);

    let forecastApiUrl = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&appid=${apiKey}`;
    axios.get(`${forecastApiUrl}`).then(displayForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchCity">
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Enter a city name..."
          onChange={updateCity}
        ></input>
        <button className="Search btn btn-primary ms-1 mb-2">Search</button>
        <button className="btn btn-success ms-1 mb-2">Current</button>
      </form>
      <WeatherUpdate
        temp={weather.temperature}
        humidity={weather.humidity}
        wind={weather.wind}
        description={weather.description}
        icon={weather.icon}
      />
      <br />
      <Forecast city={city} />
    </div>
  );
}
