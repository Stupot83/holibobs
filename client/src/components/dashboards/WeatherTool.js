import React, { Component } from "react";
import { connect } from "react-redux";
import ForecastTiles from "./ForecastTiles";
import WeatherDashboard from "./Dashboard";

const WeatherTool = ({ data }) => {
    const { city, list } = data;
    const { name } = city;
  
    return (
      <div className="weather-forecast-wrapper">
        <WeatherDashboard city={name} />
        <ForecastTiles forecasts={list} />
      </div>
    );
};

export default WeatherTool;



