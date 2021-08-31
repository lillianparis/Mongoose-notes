const mongoose = require('mongoose');
const music = require("./model");

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
  }
  