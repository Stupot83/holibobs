const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const passport = require('passport');
const users = require('./routes/api/users');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Mongo has successfully connected"))
        .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

app.listen(port, () => console.log(`You are running on http://localhost:${port}`));