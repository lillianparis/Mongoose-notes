# Mongoose-notes
Make sure to have MongoDB and Node.js installed

# Getting started

`$ npm install mongoose --save`

# Mongoose Schema 

- (shape of the document)/(Array, Boolean, Number, String, etc.).
- Everything in Mongoose starts with a Schema. 
- Each schema maps to a MongoDB collection and defines the shape of the document within the collection.

# Model

- A compiled version of the schema. When you call `mongoose.model()` on a Schema, mongoose compiles a model for you.
- Defines the programming interface for interacting with the database (create, fetch, update, delete,  ect.)



