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
          <p className="countdown">{this.state.timeLeft.toString()} till {this.props.location}</p>
        </div>
    )}
}

export default Countdown;