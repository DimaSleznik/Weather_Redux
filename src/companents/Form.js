import React from "react";
import { connect } from "react-redux";
import { getWeatherFrom } from "../actions";
function Form({ getWeather }) {
  return (
    <form onSubmit={getWeather} className="SelectCity">
      <input type="text" name="city" placeholder="Введите Город"></input>
      <button>Получить погоду</button>
    </form>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (e) => {
      dispatch(getWeatherFrom(e));
    },
  };
};
export default connect(null, mapDispatchToProps)(Form);
