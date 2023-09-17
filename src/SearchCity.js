import React, { useState } from "react";

import "./SearchCity.css";

export default function SearchCity() {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`The city is ${city}`);
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
        <button className="Search">Search</button>
        <button>Current</button>
      </form>
    </div>
  );
}
