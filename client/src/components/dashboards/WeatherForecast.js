import React, { Component } from "react";
import DayCard from "./DayCard";
import "./HolidayDashboard.scss";

export default class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullData: [],
      dailyData: []
    };
  }

  componentDidMount() {
    const city = this.props.location;

    const countryCode = this.props.country;

    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&APPID=${"bd1c4f25b5879403911d89f1f83558d9"}`;

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading =>
          reading.dt_txt.includes("12:00:00")
        );
        this.setState(
          {
            fullData: data.list,
            dailyData: dailyData
          }
        );
        const listInfo = this.state.dailyData;
        const averageTemp = listInfo.reduce((acc, curr) => acc + curr.main.temp, 0) / 5;
        this.props.callbackFromParent(averageTemp);
      });
  }

  formatDayCards() {
    return this.state.dailyData.map((reading, index) => (
      <DayCard reading={reading} key={index} />
    ));
  }

  render() {
    return (
      <div className="weather-container">
        <p className="travel-heading">5-Day Forecast for {this.props.location}</p>
        <div className="weather-container__flex">
          {this.formatDayCards()}
        </div>
      </div>
    );
  }
}
