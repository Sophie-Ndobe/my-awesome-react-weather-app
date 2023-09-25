import React, { useState } from "react";
import axios from "axios";
import "./SearchCity.css";
import WeatherUpdate from "./WeatherUpdate";
import Forecast from "./Forecast";
import CitiesPanel from "./CitiesPanel";

export default function SearchCity() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");
  const [forecast, setForecast] = useState(" ");
  const [load, setLoad] = useState(" ");

  function displayWeather(response) {
    setLoad(Harare);
    setWeather({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      // icon: response.data.temperature.icon,
      apiCity: response.data.city,
    });
  }

  function displayForecast(response) {
    setForecast({
      day1temp: response.data.daily[0].temperature.day,
      day2temp: response.data.daily[1].temperature.day,
      day3temp: response.data.daily[2].temperature.day,
      day4temp: response.data.daily[3].temperature.day,
      day5temp: response.data.daily[4].temperature.day,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(displayWeather);

    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(`${forecastApiUrl}`).then(displayForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchCity">
      <div>{load}</div>
      <CitiesPanel />
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
        city={weather.apiCity}
      />
      <br />
      <Forecast
        tempOne={forecast.day1temp}
        tempTwo={forecast.day2temp}
        tempThree={forecast.day3temp}
        tempFour={forecast.day4temp}
        tempFive={forecast.day5temp}
      />
    </div>
  );
}
