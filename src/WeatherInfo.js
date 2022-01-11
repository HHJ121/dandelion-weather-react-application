import React from "react";

import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="overview">
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-4 conditions">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>

        <div className="col-5">
          <img src={props.data.icon} alt={props.data.description} />

          <span className="temp">{props.data.temperature}</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
