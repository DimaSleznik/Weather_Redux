import React from "react";
import { useState } from "react";
import WeatherInfo from "./companents/WeatherInfo";
import Form from "./companents/Form";

function App() {
  const [Weather_data, setWeather] = useState({});
  async function getWeather(e) {
    console.log("work");
    e.preventDefault();
    const city = e.target.elements.city.value || "No_select";
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"8e46ef81a4efd8ec0cb6bc2d034ed541"}&lang=ru&units=metric`
    );
    const data = await result.json();
    console.log(data);
    e.target.elements.city.value = "";
    setWeather(data);
  }

  return (
    <div className="App">
      <div className="main_block">
        <Form getWeather={getWeather}></Form>

      {JSON.stringify(Weather_data) === "{}" || Weather_data.cod === "404"?'Введите Город':<WeatherInfo WeatherData={Weather_data} />}
      </div>
    </div>
  );
}

export default App;
