const express = require("express");
const routes = express.Router();
const Holiday = require("../../schema/Holiday");

routes.post("/", (req, res) => {
  const newHoliday = new Holiday({
    userId: req.cookies.userId,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    location: req.body.location
  });

  newHoliday
    .save()
    .then(holiday => res.json(holiday))
    .catch(err => console.log(err));
});

routes.get("/", (req, res) => {
  Holiday.find ({ userId: req.cookies.userId } )
  .then ( (holidays) => res.json(holidays))
  .catch(err => console.log(err));
});

module.exports = routes;
