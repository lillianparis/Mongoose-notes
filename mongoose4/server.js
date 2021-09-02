const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongoose_dog', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});