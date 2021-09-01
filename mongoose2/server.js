const mongoose = require('mongoose');
const music = require("./model");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost;27017/dbExample", { useNewUrlParser: true }, {versionKey: false});

const music = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Let's begin mongoose",

};



