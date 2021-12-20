const express = require("express");
const mongoose = require("mongoose");

// Specifying the PORT. process.env is a global variable that is injected during runtime. 
const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Create Mongoose connection

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipe", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let db = mongoose.connection;
db.once("open", () => console.log("Connected to database"));

app.use(require("./routes/api"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });