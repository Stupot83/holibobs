const express = require("express");
const routes = express.Router();
const Holiday = require("../../schema/Holiday");
const User = require("../../schema/User");
const DataAccess = require('../../dataAccess/dataAccess');

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

routes.route('/').get((req, res, next) => {
    var userSearchObject = {
      _id: req.cookies.userId
    };
  
    DataAccess.findOne(User, userSearchObject, res, next, () => {
      var holidaySearchObject = {
        userId: req.cookies.userId
      };
  
      DataAccess.find(Holiday, holidaySearchObject, res, next, (data) => {
          res.json(data);
      });
    });
  });

  routes.route('/:id').get((req, res, next) => {
    var userSearchObject = {
      _id: req.cookies.userId
    };
  
    DataAccess.findOne(User, userSearchObject, res, next, () => {
      var holidaySearchObject = {
        _id: req.params.id
      };
  
      DataAccess.findOne(Holiday, holidaySearchObject, res, next, (holiday) => {
          res.json(holiday);
      });
    });
  });

  routes.get('/delete/:id', (req, res, next) => {

    var holidaySearchObject = {
      _id: req.params.id
    };
  
    DataAccess.deleteOne(Holiday, holidaySearchObject, res, next, () => {
      res.redirect('/dashboard');
    });
  });


module.exports = routes;
