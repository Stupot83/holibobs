import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class HolidayCard extends Component {


    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.obj.location}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Start date: {this.props.obj.startDate}</ListGroupItem>
                        <ListGroupItem>End date: {this.props.obj.endDate}</ListGroupItem>
                    </ListGroup>
                    <Card.Link href={"/holiday/" + this.props.obj._id}>View</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default HolidayCard;