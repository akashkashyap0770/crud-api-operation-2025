import React, { useState } from "react";
import { WEATHER } from "../utils/Data";

function Weather() {
  const { image } = WEATHER;

  const [cityInput, setCityInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearchBtn = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=0c9b0dc19213d8a651f4af939dbb630c&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError(data.message || "City not found");
      }
    } catch (error) {
      setError("Failed to fetch weather data.");
    }
  };

  return (
    <section className="p-4 sm:p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        
        {/* Left side - Form and Result */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-4 p-4 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="city"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                placeholder="Enter city name"
                className="flex-1 text-base sm:text-lg p-2 rounded-md outline-none shadow-inner bg-gray-200"
              />
              <button
                onClick={handleSearchBtn}
                className="text-white bg-green-500 hover:bg-green-600 text-base sm:text-lg px-4 py-2 rounded-md transition-all"
              >
                Search
              </button>
            </div>

            {/* Weather Info */}
            <div className="mt-4">
              {error && <p className="text-red-600 text-base sm:text-lg">{error}</p>}
              {weather && weather.main && (
                <div className="text-center md:text-left space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{weather.name}</h2>
                  <p className="text-base sm:text-lg">🌡️ Feels like {weather.main.temp}°C</p>
                  <p className="text-lg sm:text-xl capitalize">{weather.weather[0].description}</p>
                  <p className="text-base sm:text-lg">💨 Wind: {weather.wind.speed} m/s</p>
                  <p className="text-base sm:text-lg">🌍 Country: {weather.sys.country}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt="Weather Visual"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Weather;
