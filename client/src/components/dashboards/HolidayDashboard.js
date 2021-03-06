import React, { Component } from "react";
import axios from "axios";
import Suitcase from "./Suitcase";
import WeatherForecast from "./WeatherForecast";
import Logout from "../auth/Logout-button";
import "./HolidayDashboard.scss";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default class HolidayDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holiday: null,
      id: this.props.match.params.id,
      listDataFromChild: null
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

  myCallback = averageTemp => {
    this.setState({ listDataFromChild: averageTemp });
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
            <p className="travel-heading">HOLIBOBS</p>
            <div className="travel-divider"></div>
          </div>
          <div className="travel-flex">
            <div className="travel-location">
              <p className="location-name"> Location</p>
              <p className="location-original">
                {this.state.holiday.location},{" "}
                {this.state.holiday.country.toUpperCase()}
              </p>
            </div>
            <div className="travel-dates">
              <div className="start-date">
                <p className="start-word">Start:</p>
                <p className="start-date-format">
                  {this.formatDate(this.state.holiday.startDate)}
                </p>
              </div>
              <div className="travel-dates__image">
                <img
                  alt="plane"
                  className="travel-dates__image"
                  src="/images/plane-icon.png"
                ></img>
              </div>
              <div className="end-date">
                <p className="end-word">End:</p>
                <p className="end-date-format">
                  {this.formatDate(this.state.holiday.endDate)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <WeatherForecast
            callbackFromParent={this.myCallback}
            location={this.state.holiday.location}
            country={this.state.holiday.location}
          />
        </div>
        <div className="suitcase-container">
          <p className="suitcase-heading">Luggage List</p>
          <div className="suitcase-divider"></div>
          <Suitcase
            tempData={this.state.listDataFromChild}
            startDate={this.state.holiday.startDate}
            endDate={this.state.holiday.endDate}
          />
        </div>
        <div className="Dashboard">
          <Logout />
          <a className="back-button" href="/dashboard"><img className="back-button__image" alt="back button" src="/images/back-icon-svg.svg"></img></a>
        </div>
        <div className="delete-button__container">
          <button onClick={this.delete} className="delete-button">
            Delete holibob
          </button>
        </div>
      </div>
    );
  }
}
