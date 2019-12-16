import React, { Component } from 'react';
import Countdown from './Countdown';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class HolidayCard extends Component {
    formatDate(date) {
        let newDate = new Date(date);
        return newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear()
    }

    render() {
        return (
            <div className="holiday-card__container">
                <a className="holiday-card__heading" href={"/holiday/" + this.props.obj._id}>{this.props.obj.location}</a>
                <div className="holiday-card__dates">
                    <p><strong>Start date: </strong>{this.formatDate(this.props.obj.startDate)}</p>
                    <p><strong>End date: </strong> {this.formatDate(this.props.obj.endDate)}</p>
                </div>
                <Countdown location={this.props.obj.location} startDate={this.props.obj.startDate}/>
            </div>
        );
    }
}

export default HolidayCard;