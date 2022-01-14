import React from "react";

import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-center">{props.data.city}</h1>
      <ul className="overview">
        <li className="text-center">
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize text-center">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-4 conditions">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/hr</li>
          </ul>
        </div>

        <div className="col-4 pt-3">
          <WeatherIcon iconCode={props.data.icon} size={70} />
          
          <WeatherTemperature celsius={props.data.temperature} />
          
        </div>
      </div>
    </div>
  );
}
