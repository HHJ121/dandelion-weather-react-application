import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [searchLoaded, setSearchLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleForecast(response) {
    setForecastData(response.data.daily);
    setSearchLoaded(true);
  }

  if (searchLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((dailyForecast, index) => {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
