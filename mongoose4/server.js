<<<<<<< HEAD
=======
// npm install express
// npm install mongoose
>>>>>>> 3abc164d26d0f3b8b510b5d4015ac71db0e88d39
const express = require("express");
const mongoose = require("mongoose");

// Specify the port 
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongoose onnection creating
<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shopping", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let db = mongoose.connection;
db.once("open", () => console.log("connected to database"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/car", {
   useNewUrlParser: true,
   useFindAndModify: false
});

let db = mongoose.connection;
db.once("open", () => console.log("connected to database"));


app.listen(PORT, () => {
   console.log(`App running on port ${PORT}!`);
});
>>>>>>> 3abc164d26d0f3b8b510b5d4015ac71db0e88d39
