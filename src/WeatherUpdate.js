import React, { useState } from "react";
import SearchCity from "./SearchCity";
import "./WeatherUpdate.css";

export default function WeatherUpdate() {

    
  return (
    <div className="WeatherUpdate">
      <h2>Lisbon</h2>
      <ul>
        <li>Sunday 15:56</li>
        <li>Cloudy</li>
      </ul>

      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt=" "
              className="me-2"
            />
            <h1>25</h1>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: 71%</li>
            <li>Windy: 12km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
