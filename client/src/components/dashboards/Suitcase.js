import React, { Component } from "react";

class Suitcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avgTemp: this.props.tempData,
      holidayLength: this.getHolidayLength(),
      suitcaseHot: ["vest", "shorts", "flip-flops", "undies"],
      suitcaseCold: ["t-shirt", "jeans", "socks", "undies"],
      suitcase: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tempData !== this.props.tempData) {
      this.setState({ avgTemp: this.props.tempData }, () => {
        let suitcase = this.getSuitcase();
        this.setState({ suitcase: suitcase });
      });
    }
  }

  getSuitcase() {
    var compactSuitcase;

    const checkTemp = parseInt(this.state.avgTemp);

    if (checkTemp > 23) {
      compactSuitcase = this.state.suitcaseHot.map(item => {
        return { item: item, quantity: this.state.holidayLength };
      });
    } else {
      compactSuitcase = this.state.suitcaseCold.map(item => {
        return { item: item, quantity: this.state.holidayLength };
      });
    }
    return compactSuitcase;
  }

  getHolidayLength() {
    let firstDate = new Date(this.props.startDate);
    let secondDate = new Date(this.props.endDate);
    let milliseconds = secondDate.getTime() - firstDate.getTime();
    let numberOfDays = milliseconds / (1000 * 3600 * 24);

    return numberOfDays;
  }

  render() {
    return (
      <div>
        <p className="days">
          {this.state.holidayLength
            ? "Your holiday is " + this.state.holidayLength + " days long."
            : "Finding holiday length."}
        </p>
        <div className="suitcase">
          {this.state.suitcase.map(item => {
            return (
              <p>
                {item.item} X {item.quantity}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Suitcase;
