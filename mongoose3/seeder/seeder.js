const mongoose = require('mongoose');
const People = require('../model')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/people", { useNewUrlParser: true, useUnifiedTopology: true  }, {versionKey: false});

let db = mongoose.connection;

db.once("open", () => console.log('connected'));

People.deleteMany({}).then(() => console.log('deleted'))


const human = new People ({
    firstName: "Elizabeth",
     lastName: "Smith",
     age: 23
  });

  human.save().then(saved => console.log(saved));

// How long to wait until the database closes, closes connection
  setTimeout(() => {

    db.close();

  },
2000
  ) 