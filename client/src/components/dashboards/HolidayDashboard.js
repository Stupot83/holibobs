import React, { Component } from "react";
import axios from "axios";
import "./HolidayDashboard.scss"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



export default class HolidayDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holiday: [],
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
    return (
    <div>
      <div className="travel-container">
        <div className = "travel-header"> 
          <p className = "travel-heading"> Holibobs</p>
          <div className = "travel-divider"></div>
        </div>
  
      <div className = "travel-location">
        <p className = "location-name"> Location</p>
        <p>{this.state.holiday.location}</p>
      </div>
      
      <div className = "travel-dates">
        <div className = "start-date">
          <p className = "start-word">Start:</p>
          <p className = "start-date-format">{this.formatDate(this.state.holiday.startDate)}</p>
        </div>
        <div className = "travel-dates__image">
          <img src="/images/plane.png"></img>
        </div>
        <div className = "end-date">
          <p className = "end-word">End:</p>
          <p className = "end-date-format">{this.formatDate(this.state.holiday.endDate)}</p>
        </div>
      </div>

        <button onClick={this.delete}>Delete</button>
      </div>
      <a className="back-dashboard-link" href="/dashboard">Back to DashBoard</a>
    </div>
    );
  }
}
