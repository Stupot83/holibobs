import React, { Component } from "react";
import axios from "axios";
import "./HolidayDashboard.scss";
import WeatherForecast from "./WeatherForecast";
import "./dashboard.scss";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export default class HolidayDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holiday: null,
      id: this.props.match.params.id
    };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const url = "/api/holidays/" + this.state.id;

    axios
      .get(url)
      .then(res => {
        this.setState({ holiday: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  delete() {
    axios
      .get("/api/holidays/delete/" + this.state.id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));

    this.props.history.push("/dashboard");
  }

  formatDate(date) {
    let newDate = new Date(date);
    return newDate.getDate() + " " + months[newDate.getMonth()];
}

  render() {
    const { holiday } = this.state;

    if (holiday === null) {
      return null;
    }
    return (
    <div>
      <div className="travel-container">
        <div className="travel-header"> 
          <p className="travel-heading"> HOLIBOBS</p>
          <div className="travel-divider"></div>
        </div>
  
      <div className="travel-location">
        <p className="location-name"> Location</p>
        <p className="location-original">{this.state.holiday.location}</p>
      </div>
      
      <div className="travel-dates">
        <div className="start-date">
          <p className="start-word">Start:</p>
          <p className="start-date-format">{this.formatDate(this.state.holiday.startDate)}</p>
        </div>
        <div className="travel-dates__image">
          <img className="travel-dates__image" src="/images/plane-icon.png"></img>
        </div>
        <div className="end-date">
          <p className="end-word">End:</p>
          <p className="end-date-format">{this.formatDate(this.state.holiday.endDate)}</p>
        </div>
      </div>
      <div className="predicted-weather">
        <p className="predicted-weather-text">Predicted weather:</p>
      </div>

<h1>Master</h1>
      <div class="container-fluid col-md-12">
        <div class="row">
        <div class="col-md-3 outline-left">
          <p>{this.state.holiday.location}</p>
          <p>{this.state.holiday.startDate}</p>
          <p>{this.state.holiday.endDate}</p>
          <button onClick={this.delete}>Delete</button>
          <a href="/dashboard">Back to DashBoard</a>
        </div>
        <div class="col-md-8 outline-right">
          <WeatherForecast location={this.state.holiday.location} />
        </div>
        </div>
      </div>
      <div className="holiday-nav">
        <button className="delete-button" onClick={this.delete}>Remove Holibob</button>
        <a className="back-dashboard-link" href="/dashboard">Back to Dashboard</a>
        </div>
        <div className="suitcase-container">
          <p className="suitcase-heading">Luggage List</p>
          <div className="suitcase-divider"></div>
          <p className="suitcase-text">1 X T-shirt</p>
          <p className="suitcase-text">1 X T-shirt</p>
          <p className="suitcase-text">1 X T-shirt</p>
        </div>
    </div>
    </div>
    );
  }
}
