const express = require('express');
const app = express();
const mongoose = require('mongoose');
const grocery = require('./userModel');

const db = 'mongodb://localhost/mongoose4';

mongoose.connect(db);

const port = 8080;

app.listen(port, function (){ 
  console.log('app listening on port' + port)
})
