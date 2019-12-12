import React, { Component } from "react";
import countdown from "countdown";

class Countdown extends Component {
    constructor(){
        super();
        this.state = {
            location: "",
            startDate: "",
            timeLeft: "",
        }
        setInterval(() => {if (this.state.startDate)
            this.tick() }, 1000)
    }

    tick () {
        this.setState({
          timeLeft: countdown( new Date(this.state.startDate) ).toString()
        })
      }

    render () {
       return(<div className="row" style={{ marginTop: "3rem" }}>
              <p className="countdown">{this.state.timeLeft.toString()} to go until {this.state.location}</p>
            </div>)
    }
}

export default Countdown;