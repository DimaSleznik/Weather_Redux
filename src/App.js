import React from "react";
import WeatherInfo from "./companents/WeatherInfo";
import Form from "./companents/Form";
import Alert from "./companents/Alert";
import {connect} from 'react-redux';


function App({WeatherData}) {
  return (
    <div className="App">
      <div className="main_block">
        <Form ></Form>
      {JSON.stringify(WeatherData) === "{}" || WeatherData.cod === "404"?<Alert Weather_state = {WeatherData}/>:<WeatherInfo />}
      </div>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    WeatherData:state.weather.weather
  }
}

export default connect(mapStateToProps,null)(App);
