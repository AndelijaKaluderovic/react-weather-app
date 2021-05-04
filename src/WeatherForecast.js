import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "d472df3cc457416a11c7918c00d8eaa1";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <h2>Daily Forecast</h2>

      <div className="WeatherForecastDay">Wed</div>

      <div className="WeatherForecastTemp">
        2°🌡<span className="WeatherForecastTemp-max">9°</span>
      </div>
      <div className="WeatherForecastIcon">
        <WeatherIcon code="01d" size={30} />
      </div>

      <div className="WeatherForecastDescription">Clear sky</div>
    </div>
  );
}
