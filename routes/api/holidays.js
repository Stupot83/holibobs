const express = require("express");
const routes = express.Router();
const Holiday = require("../../schema/Holiday");

routes.post("/holiday", (req, res) => {
  const newHoliday = new Holiday({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    location: req.body.location
  });

  newHoliday
    .save()
    .then(holiday => res.json(holiday))
    .catch(err => console.log(err));
});

module.exports = routes;
