import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="cityName">
        {props.data.city}, {props.data.country}
      </h1>
      <div className="row">
        <div className="col-3">
          <span className="mainTemp">{Math.round(props.data.temperature)}</span>
          °C
        </div>
        <div className="col-5">
          <ul>
            <li>max {Math.round(props.data.maxTemp)}°</li>
            <li>min {Math.round(props.data.minTemp)}°</li>
            <li>feels like {Math.round(props.data.feelsLike)}°</li>
          </ul>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} size={90} />
        </div>
      </div>
      <p>{props.data.weatherMain}</p>
      <br />
      <ul>
        <li>
          Weather <span className="textLeft">{props.data.description}</span>
        </li>
        <li>
          Relative humidity{" "}
          <span className="textLeft">{props.data.humidity} %</span>
        </li>
        <li>
          Wind speed{" "}
          <span className="textLeft">
            {Math.round(props.data.windSpeed)} m/s
          </span>
        </li>
        <li>
          Visibility{" "}
          <span className="textLeft">{props.data.visibility / 1000} km</span>
        </li>
        <li>
          Pressure <span className="textLeft">{props.data.pressure} hPa</span>
        </li>
        <li>
          Clouds <span className="textLeft">{props.data.clouds} %</span>
        </li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
    </div>
  );
}
