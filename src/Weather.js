import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showWeather(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://assets.msn.com/bundles/v1/weather/latest/ClearNightV3.svg",
    });
  }

  if (weatherData.loaded) {
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
        <h1>{weatherData.city}</h1>
        <ul className="overview">
          <li>
            <FormatDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-4 conditions">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/hr</li>
            </ul>
          </div>

          <div className="col-5">
            <img src={weatherData.icon} alt={weatherData.description} />

            <span className="temp">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

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
        <h1>Loading. . .just retrieving the data. . .</h1>
      </div>
    );
  }
}
