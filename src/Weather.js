import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function searchCity(response) {
    setWeatherData({
      ready: true,
      city: response.data.main.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      visibility: response.data.sys.visibility,
      clouds: response.data.clouds.cod,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      weatherMain: response.data.weather.main,
      description: response.data.weather.description,
      icon: response.data.weather.icon,
      windSpeed: response.data.wind.speed,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      iconUrl: "https://openweathermap.org/img/wn/${weatherData.icon}@2x.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-dark" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-4">
            <h1>
              {weatherData.city}, {weatherData.country}
            </h1>
            <div className="row">
              <div className="col-2">
                {Math.round(weatherData.temperature)}°
              </div>
              <div className="col-4">
                <ul>
                  <li>max {weatherData.maxTemp}°</li>
                  <li>Feels like {weatherData.feelsLike}°</li>
                  <li>min {weatherData.minTemp}°</li>
                </ul>
              </div>
              <div className="col-3">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  width="100px"
                />
              </div>
            </div>
            <p>{weatherData.weatherMain}</p>
            <br />
            <ul>
              <li>Weather {weatherData.description}</li>
              <li>Relative humidity {weatherData.humidity}</li>
              <li>Visibility {weatherData.visibility}</li>
              <li>Pressure {weatherData.pressure}</li>
              <li>Clouds {weatherData.clouds}</li>
              <li>Wind speed {weatherData.windSpeed}</li>
              <li>
                Sunrise/sunset {weatherData.sunrise} / {weatherData.sunset}
              </li>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "d472df3cc457416a11c7918c00d8eaa1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchCity);
    return "Loading. . .";
  }
}
