import React from "react";

function Form({ getWeather }) {
  console.log(getWeather);
  return (
    <form onSubmit={getWeather} className="SelectCity">
      <input type="text" name="city" placeholder="Введите Город"></input>
      <button>Получить погоду</button>
    </form>
  );
}
export default Form;
