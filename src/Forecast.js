import React from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast() {
  let date = new Date();
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <p>Mon</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>20</p>
        </div>
        <div className="col">
          <p>Mon</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>20</p>
        </div>
        <div className="col">
          <p>Mon</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>20</p>
        </div>
        <div className="col">
          <p>Mon</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>20</p>
        </div>
        <div className="col">
          <p>Mon</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>20</p>
        </div>
      </div>
    </div>
  );
}
