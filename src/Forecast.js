import React from "react";

import "./Forecast.css";

export default function Forecast(props) {
  let forecastOne = Math.round(props.tempOne);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function forecastData() {
    let date = new Date();
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <p>{days[2]}</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>{forecastOne}</p>
        </div>
        <div className="col">
          <p>{days[3]}</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>{Math.round(props.tempTwo)}</p>
        </div>
        <div className="col">
          <p>{days[4]}</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>{Math.round(props.tempThree)}</p>
        </div>
        <div className="col">
          <p>{days[5]}</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>{Math.round(props.tempFour)}</p>
        </div>
        <div className="col">
          <p>{days[6]}</p>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <p>{Math.round(props.tempFive)}</p>
        </div>
      </div>
    </div>
  );
}
