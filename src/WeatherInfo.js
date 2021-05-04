import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div clasNme="WeaterInfo">
      <div className="row">
        <div className="col-4">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
          <div className="row">
            <div className="col-2">{Math.round(props.data.temperature)}°</div>
            <div className="col-4">
              <ul>
                <li>max {props.data.maxTemp}°</li>
                <li>Feels like {props.data.feelsLike}°</li>
                <li>min {props.data.minTemp}°</li>
              </ul>
            </div>
            <div className="col-3">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                width="100px"
              />
            </div>
          </div>
          <p>{props.data.weatherMain}</p>
          <br />
          <ul>
            <li>Weather {props.data.description}</li>
            <li>Relative humidity {props.data.humidity}</li>
            <li>Visibility {props.data.visibility}</li>
            <li>Pressure {props.data.pressure}</li>
            <li>Clouds {props.data.clouds}</li>
            <li>Wind speed {Math.round(props.data.windSpeed)}</li>
            <li>
              Sunrise/sunset {props.data.sunrise} / {props.data.sunset}
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
