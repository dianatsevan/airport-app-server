const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
require('./config/passport/index');

mongoose.connect('mongodb+srv://dianatsevan:dianatsevan@airport-app-8zodm.mongodb.net/airport-app?retryWrites=true', { useNewUrlParser: true })
  .then(() => {
    console.log('connected successfully');
  }, (err) => {
    console.log('connection failure');
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const router = require('./routes');

app.use('/', router);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
