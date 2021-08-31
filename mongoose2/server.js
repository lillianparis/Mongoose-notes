const mongoose = require('mongoose');
const music = require("./model");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

const data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Let's begin mongoose",

};

music.create(data)
  .then(dbmusic => {
    console.log(dbmusic);
  })
  .catch(({ message }) => {
    console.log(message);
  });
  