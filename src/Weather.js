import React from "react";
import "./Style.css";

export default function Weather() {
  return (
    <body>
      <div className="weather-app">
        <header>
          <form>
            <input
              type="text"
              className="search-form-input"
              placeholder="Enter the city"
              required
            />
            <input
              type="submit"
              className="search-form-button"
              value="Search"
            />
          </form>
        </header>
        <main>
          <div className="all-weather">
            <h1 className="weather-app-city">Kyiv</h1>
            <div className="temperature-container">
              <div className="weather-app-icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt="broken-cloudgit"
                />
              </div>
              <span className="weather-app-temperature"></span>
              <span className="temperature-value">8 °C</span>
            </div>
          </div>
          <p className="weather-app-details">
            <span className="weather-app-date">Sunday 17:42, </span>
            <span className="description">Rainy</span>
            <br />
            Humidity: <strong>80%</strong>, Wind
            <strong> 3km/h</strong>
          </p>
          <br />
          <div className="weather-forecast"></div>
          <br />
        </main>
        <footer>
          The project was coded by
          <a
            href="https://www.instagram.com/vika_proki/"
            target="_blank"
            rel="noreferrer"
          >
            Viktoriia Prokipchuk
          </a>
          and is
          <a
            href="https://github.com/Vikki-Proki/weather_app"
            target="_blank"
            rel="noreferrer"
          >
            on GitHub
          </a>
          and
          <a
            href="https://weather-app-vikki-proki.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </body>
  );
}
