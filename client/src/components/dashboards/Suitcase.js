import React, { Component } from "react";

class Suitcase extends Component {
    constructor(props){
        super(props);
        this.state = {
            avgTemp: 24,
            holidayLength: 0,
            suitcase: [],
        }
        
    }

    componentDidMount() {
        this.setState({
            holidayLength: this.getHolidayLength()
                  })
          this.generateSuitcase();
          this.assembleSuitcase();
    }

    generateSuitcase() {
        if (this.state.avgTemp > 23 ){
            this.setState({
                suitcase: [ "tshirt", "jeans", "socks", "undies"]
            })
            //  this.state.suitcase.push({
            //     tshirt: 1,
            //     jeans: 1,
            //     socks: 1,
            //     undies: 1,
            // });
        } else {
            this.setState({
                suitcase: [ "vest", "shorts", "flipflops", "undies"]
            })
            //  this.state.suitcase.push({
            //     tshirt: 1,
            //     shorts: 1,
            //     trainersocks: 1,
            //     undies: 1,
            // });
        };
    }


    getHolidayLength() {
        let firstDate = new Date(this.props.startDate);
        let secondDate = new Date(this.props.endDate); 
        let milliseconds = secondDate.getTime() - firstDate.getTime();
        let numberOfDays = milliseconds / (1000 * 3600 * 24); 

        return numberOfDays
    }


    assembleSuitcase() {
        let daysRqd = this.getHolidayLength();
        let compactSuitcase = this.state.suitcase.map((item) => {
            return { item:item, quantity:daysRqd }
        });
        this.setState({
            suitcase: compactSuitcase
        })
        console.log( "grhgfjh", { compactSuitcase } )

        // let suitcaseArray = this.state.suitcase;
        // let compactSuitcase = suitcaseArray.reduce((suitcase, item) => {
        //     Object.keys(item).forEach(key => {
        //       suitcase[key] = (suitcase[key] || 0) + item[key];
        //     });
        //     console.log(suitcase)
        //     return suitcase;
        //   }, {});
          return compactSuitcase;
    }


  
    render() {

        // let days = this.getHolidayLength()
        console.log("render start", this.state.suitcase)
      return (
        <div>
          <p className="days">{ this.state.holidayLength ? "Your holiday is " + this.state.holidayLength + " days long.": "Finding holiday length." }</p>
          <p className="suitcase">{ this.state.suitcase }</p>
        </div>    
    )}
}

export default Suitcase;