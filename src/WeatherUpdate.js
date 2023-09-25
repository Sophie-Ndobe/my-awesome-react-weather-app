import React from "react";

import "./WeatherUpdate.css";

export default function WeatherUpdate(props) {
  let temperature = Math.round(props.temp);

  let date = new Date();
  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return (
    <div className="WeatherUpdate">
      <h2>{props.city}Lisbon</h2>
      <ul>
        <li>
          {day} {hours}:{minutes}
        </li>
        <li>{props.description} </li>
      </ul>

      <div className="row">
        <div className="col">
          <div className="d-flex">
            <span>
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            </span>
            <h1>{temperature}</h1>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {props.humidity}%</li>
            <li>Windy: {props.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
