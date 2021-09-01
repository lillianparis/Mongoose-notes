const mongoose = require('mongoose');
const Example = require("./model");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost;27017/dbmongoose3", { useNewUrlParser: true }, {versionKey: false});