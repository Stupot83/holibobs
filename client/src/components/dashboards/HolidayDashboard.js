import React, { Component } from "react";
import axios from "axios";
import Countdown from './Countdown';
import Suitcase from './Suitcase';

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

  render() {
    const { holiday } = this.state;

    if (holiday === null) {
      return null;
    }

    return (
      <div>
        <p>{this.state.holiday.location}</p>
        <p>{this.state.holiday.startDate}</p>
        <p>{this.state.holiday.endDate}</p>
        <Countdown location={this.state.holiday.location} startDate={this.state.holiday.startDate}/>
        <Suitcase startDate={this.state.holiday.startDate} endDate={this.state.holiday.endDate}/>
        <button onClick={this.delete}>Delete</button>
        <a href="/dashboard">Back to DashBoard</a>
      </div>
    );
  }
}
