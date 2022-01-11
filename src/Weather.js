import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search(city) {
    const apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityInput}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search(city);
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
