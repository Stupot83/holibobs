import React, { Component } from "react";

class Suitcase extends Component {
    constructor(startDate, endDate){
        super();
        this.state = {
            avgTemp: 24,
            startDate: startDate,
            endDate: endDate,
            holidayLength: 0,
            suitcase: [],
        }
    }

    generateSuitcase() {
        if (this.state.avgTemp > 23 ){
             this.state.suitcase.push({
                tshirt: 1,
                jeans: 1,
                socks: 1,
                undies: 1,
            });
        } else {
             this.suitcase.push({
                tshirt: 1,
                shorts: 1,
                trainersocks: 1,
                undies: 1,
            });g
        };
    }

    getHolidayLength() {
        let firstDate = new Date(this.state.startDate); 
        let secondDate = new Date(this.state.endDate); 

        let milliseconds = secondDate.getTime() - firstDate.getTime();
        let numberOfDays = milliseconds / (1000 * 3600 * 24); 
                
        this.state.holidayLength = numberOfDays
    }

    assembleSuitcase() {
        let daysRqd = this.getHolidayLength();

        for(let i = 0 ; i < daysRqd; i++ ){
            this.generateSuitcase();
        }

        let suitcaseArray = this.state.suitcase;
        suitcaseArray.reduce((suitcase, item) => {
            Object.keys(item).forEach(key => {
              suitcase[key] = (suitcase[key] || 0) + item[key];
            });
            return suitcase;
          }, {});
    }


  
    render() {
      return (
        <div>
          <p className="suitcase">{ assembleSuitcase() }</p>
          <p className="days">Your holiday is {this.state.holidayLength} days long </p>

        </div>
        
    )}
}

export default Suitcase;