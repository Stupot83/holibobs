import React, { Component } from "react";
import countdown from "countdown";

class Countdown extends Component {
    constructor(){
        super();
        this.state = {
            location: "",
            timeLeft: "",
        }
        setInterval(() => {if (this.props.startDate)
            this.tick() }, 1000)
    }
    

    tick () {
        this.setState({
          timeLeft: countdown(new Date(this.props.startDate))
        })
      }

    render () {
      return (
        <div className="">
          <div className="countdown-item__container">
            <div className="countdown-item">
              <p className="countdown-text__bold">{this.state.timeLeft.days}</p>
              <p>days</p>
            </div>
            <div className="countdown-item">
              <p className="countdown-text__bold">{this.state.timeLeft.hours}</p>
              <p>hours</p>
            </div>
            <div className="countdown-item">
              <p className="countdown-text__bold">{this.state.timeLeft.minutes}</p>
              <p>minutes</p>
            </div>
            <div className="countdown-item">
              <p className="countdown-text__bold">{this.state.timeLeft.seconds}</p>
              <p>seconds</p>
            </div>
          </div>
        </div>
    )}
}

export default Countdown;