import React from "react";
import Temperture from "./Temperture";
function WeatherInfo({ WeatherData }) {
  return (
    <div className="WeatherInfo">
      <div className='city_name'>{WeatherData.name}</div>
      <Temperture
        temp={WeatherData.main.temp}
        feels_like={WeatherData.main.feels_like}
      />
    </div>
  );
}

export default WeatherInfo;
