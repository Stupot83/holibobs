import React, { Component } from "react";
import DayCard from "./DayCard";

export default class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullData: [],
      dailyData: [],
      degreeType: "celsius"
    };
  }

  componentDidMount() {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=${"bd1c4f25b5879403911d89f1f83558d9"}`;
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
      <div className="container">
        <h1 className="col-md-12">5-Day Forecast.</h1>
        <h5 className="text-muted">{this.props.location}</h5>
        <div className="row justify-content-center">
          {this.formatDayCards()}
        </div>
      </div>
    );
  }
}
