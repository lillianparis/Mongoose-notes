const mongoose = require("mongoose");
const express = require('express');
const fs = require('fs');

const App = express();

applicationCache.use(express.static(path.join(_dirname, 'public')))

const model = require("./models.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });
// If you delete 42, the error string message will appear. Because in the model it requires a number
mongoose.model('users', { name: String });
mongoose.model('posts', { content: String });

fs.readdirSync(__dirname + '/models').forEach(function (filename {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename')
});

app.get('/users', function (req, res) {
    mongoose.model('users').find(function (err, users) {
      res.send(users);
    });
  });

app.get('/posts', function (req, res) {
  mongoose.model('posts').find(function (err, posts) {
    res.send(posts);
  });
});