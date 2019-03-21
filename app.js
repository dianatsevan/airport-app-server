const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/airport-app', { useNewUrlParser: true });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = require('./routes');

app.use('/', router);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
