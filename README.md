# Welcome to a Guide for Mongoose

## Mongoose VS. MongoDB

- Brief introductions tot he differences between Mongoose and MongoDB.
- Brief examples and installation procedure.

### Mongoose

- Mongoose is a popular npm package.
- Known as the ODM (Object Document Mapper. A code library that converts the transfer of data stored in database tables into objects.
- Mongoose gives us the power to organize our database by using schemas.
- Allows you to define objects with a schema that is mapped to a MongoDB document.
- Once a schema is defined, then you can create a model based on a specific schema.
- Once you have defined your schemas and models, Mongoose contains several functions that allow you to validate, save, delete, and query your data using similar MongoDb functions.

### MongoDB

- MongoDb is a database that stores your data as documents. (JSON Structure).
- The documents are then saved to collections.
- Scalable and consistent
- Uses the Mongo Shell
- MongoDB has a flexible data model, making it easier to change data within your application
- Layout:

```
{
  Breed: "Sheperd",
  dogName: "Max"
}
```

## Creating a MongoDb/Mongoose Database

- A Quick Tutorial

### Setting up Mongo

- Make sure to have MongoDB and Node.js installed
- [Mongo Installation](https://www.mongodb.com/try?jmp=nav#community)
- Create a MongoDB database
- [Create a Mongo Database](https://docs.mongodb.com/manual/administration/install-community/)
- Make sure you have node.js downloaded
- [Node installation](https://nodejs.org/en/download/)

### Setting up Mongoose

- Make a new directory for your Mongoose code
- `npm init`
- Install mongoose and mongoose.connect
- `$ npm install mongoose --save`
- Connect to the MongoDB database. For example, i've opened a connection to a databse that i've called 'mongoose-notes' using the `connect` function.
- Insert into index.js file:

```
const mongoose = require('mongoose)
mongoose.connect('mongodb://localhost/mongoose-notes');
```

- The `connect` function takes in two other optional parameters.
- You can use this for example:

```
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_notes', function (err) {

   if (err) throw err;

   console.log('Successfully connected');

});
```

- If an error occurs when connecting to your database, the error is thrown and all further proccesses are stopped.

### Defining a Mongoose Schema

- In the mongoDb layout, i've converted the document into a mongoose schema:

```
const dogSchema = mongoose.Schema({
    Breed: String,
    dogName: String
});
```

- This is a very basic schema that contains two properties with no attributes associated with it.
- You can convert the Breed and firstName properties to be child objects of a `name` property.

```
const dogSchema = mongoose.Schema({
    name: {
        breed: String,
    dogName: String
    },
    created: Date
});
```
- Mongoose allows you to create flexible schemas with many different possible combinations of how you can organize your data.

### Creating and Saving Mongoose Models

- Continuting the Breed and dogName schema:
```
const name = mongoose.model('name', nameSchema);
```
- A Mongoose Model, when saved, created a document in the MongoDB with the properties defined by the schema it's derived from.
- To demonstrate creating and saving an object, in the next example, Iam going to create several objects. 