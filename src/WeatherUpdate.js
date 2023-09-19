import React, { useState } from "react";
import axios from "axios";
import SearchCity from "./SearchCity";
import "./WeatherUpdate.css";

export default function WeatherUpdate(prop) {
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

  function apiCall() {
    let city = prop.city;
    console.log(city);
    let apiKey = "8342a5044534040e24d2802ce4fcc6ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(displayWeather);
  }

  return (
    <div className="WeatherUpdate">
      <h2>Lisbon</h2>
      <ul>
        <li>Sunday 15:56</li>
        <li>{weather.description} </li>
      </ul>

      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt=" "
              className="me-2"
            />
            <h1>{weather.temperature}25</h1>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>Windy: {weather.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
