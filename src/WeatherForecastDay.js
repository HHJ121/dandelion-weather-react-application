import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
   
    function maxTemp() {
        let temp = Math.round(props.data.temp.max);
        return `${temp}`;
    }

    function minTemp() {
      let temp = Math.round(props.data.temp.min);
      return `${temp}`;
    }

  function forecastday() {
      let date = new Date(props.data.dt * 1000);
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[date.getDay()];

      return day;
  }
  
    return (
    <div>
      <div className="WeatherForecast-day">{forecastday()}</div>
      <WeatherIcon iconCode={props.data.weather[0].icon} size={40} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">
          {maxTemp()}°
        </span>{" "}
        /{" "}
        <span className="WeatherForecast-temp-min">
          {minTemp()}°
        </span>
      </div>
    </div>
  );
}
