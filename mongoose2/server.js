const mongoose = require('mongoose');
const music = require("./model");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost;27017/dbExample", { useNewUrlParser: true }, {versionKey: false});

const music = {
  array: ["Song1", "Song2", "Song3"],
  boolean: false,
  string:
    "\"Let's begin mongoose!",

};



