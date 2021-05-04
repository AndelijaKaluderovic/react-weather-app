import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div clasNme="WeaterInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <div className="row">
        <div className="col-3">{Math.round(props.data.temperature)}°C</div>
        <div className="col-5">
          <ul>
            <li>max {Math.round(props.data.maxTemp)}°</li>
            <li>feels like {Math.round(props.data.feelsLike)}°</li>
            <li>min {Math.round(props.data.minTemp)}°</li>
          </ul>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} size={90} />
        </div>
      </div>
      <p>{props.data.weatherMain}</p>
      <br />
      <ul>
        <li>Weather {props.data.description}</li>
        <li>Relative humidity {props.data.humidity} %</li>
        <li>Wind speed {Math.round(props.data.windSpeed)} m/s</li>
        <li>Visibility {props.data.visibility / 1000} km</li>
        <li>Pressure {props.data.pressure} hPa</li>
        <li>Clouds {props.data.clouds} %</li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
    </div>
  );
}
