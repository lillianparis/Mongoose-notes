// Require mongoose
const express = require("express");
const mongoose = require("mongoose");

// Specify the port 
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Creating mongoose connection

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/food", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let db = mongoose.connection;
db.once("open", () => console.log("connected to database"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
