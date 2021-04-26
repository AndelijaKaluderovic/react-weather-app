import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <div
            className="col-2
          "
          >
            <input type="submit" value="Search" className="btn btn-dark" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-4">
          <h1>Stockholm, Sweden</h1>
          <div className="row">
            <div className="col-3">6°</div>
            <div className="col-3">
              <ul>
                <li>max 10°</li>
                <li>Feels like 1°</li>
                <li>min -2°</li>
              </ul>
            </div>
            <div className="col-3">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/shower+storm+weather+icon-1320196637274633243.png"
                alt="rain"
                width="100px"
              />
            </div>
          </div>
          <p>Raining, calm</p>
          <br />
          <ul>
            <li>Visibility 10.0 miles</li>
            <li>Precipitation 0.00 in</li>
            <li>Relative humidity 23%</li>
            <li>Dew point 5°</li>
            <li>Baromter 30.01</li>
            <li>Sunrise/sunset 07:06 / 18:51</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
