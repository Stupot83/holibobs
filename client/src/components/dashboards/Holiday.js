import React, { Component } from "react";
import axios from "axios";

class Holiday extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      location: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
   
    const { startDate, endDate, location } = this.state;

    axios.post('/api/holidays/', { startDate, endDate, location })
      .then((result) => {
      });
  };

  render() {
    const { startDate, endDate, location } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Start date</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={this.onChange}
        />
        <label>End date</label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={this.onChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={this.onChange}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Holiday;
