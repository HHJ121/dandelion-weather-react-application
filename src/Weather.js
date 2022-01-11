import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
          autoComplete="off"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>Taipei City</h1>
      <ul className="overview">
        <li>Sunday 07:30</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-4 conditions">
          <ul>
            <li>Precipitation: 17%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 17 km/hr</li>
          </ul>
        </div>

        <div className="col-4">
          <img
            src="https://assets.msn.com/bundles/v1/weather/latest/ClearNightV3.svg"
            alt="Mostly cloudy"
          />

          <span className="temp">7</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
