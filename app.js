const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const holidays = require("./routes/api/holidays");
const cors = require("cors");
const app = express();

app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cookieParser());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set("useCreateIndex", true);

mongoose.Promise = global.Promise;

mongoose.connection
  .on("connected", () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  });

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/holidays", holidays);

module.exports = app;