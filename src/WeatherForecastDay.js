import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecastDay">{day()}</div>
      <div className="WeatherForecastTemp">
        {minTemperature()}🌡
        <span className="WeatherForecastTemp-max">{maxTemperature()}</span>
      </div>
      <div className="WeatherForecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="WeatherForecastDescription">
        {props.data.weather[0].description}
      </div>
    </div>
  );
}
