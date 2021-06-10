
export const getWeatherFrom = (e) => {
  return (dispatch) => {
    e.preventDefault();
    const city = e.target.elements.city.value || "No_select";
    e.target.elements.city.value = "";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"8e46ef81a4efd8ec0cb6bc2d034ed541"}&lang=ru&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(weatherSuccess(res));
        console.log(res);
      });
  };
};
export const weatherSuccess = (weather) => {
  return {
    type: "SUCCESS_WEATHER",
    payload: weather,
  };
};
