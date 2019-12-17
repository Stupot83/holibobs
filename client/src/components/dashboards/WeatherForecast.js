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
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${"bd1c4f25b5879403911d89f1f83558d9"}`;
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
          },
          () => console.log(this.state)
        );
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
