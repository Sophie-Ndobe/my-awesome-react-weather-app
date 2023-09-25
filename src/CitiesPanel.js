import React from "react";
import "./CitiesPanel.css";

export default function CitiesPanel() {
  return (
    <div className="CitiesPanel">
      <div className="row mb-3 mt-3">
        <div className="col-2">
          <a href="/">Harare</a>
        </div>
        <div className="col-2">
          <a href="/">Durban</a>
        </div>
        <div className="col-2">
          <a href="/">Lisbon</a>
        </div>
        <div className="col-2">
          <a href="/">Pretoria</a>
        </div>
      </div>
    </div>
  );
}
