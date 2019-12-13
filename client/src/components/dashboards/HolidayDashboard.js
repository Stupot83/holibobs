import React, { Component } from 'react';
import axios from 'axios';

export default class HolidayDashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            holiday: [],
            id: this.props.match.params.id };
    }

    componentDidMount() {
        const url = "/api/holidays/" + this.state.id;

        axios.get(url)
            .then(res => {
                this.setState({ holiday: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
            <p>{this.state.holiday.location}</p>
            <p>{this.state.holiday.startDate}</p>
            <p>{this.state.holiday.endDate}</p>
            <a href="/dashboard">Back to DashBoard</a>
            </div>
        );
    }
}