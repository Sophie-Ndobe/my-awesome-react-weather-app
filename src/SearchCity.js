import React, { useState } from "react";

import "./SearchCity.css";

export default function SearchCity() {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    return city;
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
    </div>
  );
}
