import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  const celsius = Math.round(reading.main.temp);

  const imgURL = `owf owf-${reading.weather[0].id} owf-2x`;

  return (
    <div className="">
      <div className="">
        <p className="">{moment(newDate).format('MMM Do')}</p>
        <i className={imgURL}></i>
        <h4>{celsius + "°C"}</h4>
      </div>
    </div>
  )
}

export default DayCard;