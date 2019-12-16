import React, { Component } from 'react';
import axios from 'axios';
import HolidayCard from './HolidayCard';

export default class Holidays extends Component {

    constructor(props) {
        super(props);
        this.state = { holidays: [] };
    }

    componentDidMount() {
        axios.get('/api/holidays/')
            .then(res => {
                this.setState({ holidays: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    holidayCard() {
        console.log(this.state.holidays);
        return this.state.holidays.map((data, i) => {
            return <HolidayCard obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="holidays-container">
                {this.holidayCard()}
            </div> 
        )
    }
}