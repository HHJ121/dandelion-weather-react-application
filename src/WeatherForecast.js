import React from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
 
 function handleForecast(response) {

 }
 
  let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecast);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon iconCode="01d" size={40} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span> /{" "}
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
