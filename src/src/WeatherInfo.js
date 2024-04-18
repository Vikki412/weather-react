import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <WeatherTemperature celsius={props.data.temperature} />{" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy weather icon"
            />
          </div>
          <div className="col-6">
            {""}
            {""}
            <ul>
              <li>
                <strong>{props.data.description}</strong>
              </li>

              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
