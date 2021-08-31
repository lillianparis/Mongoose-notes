# Welcome to a Guide for Mongoose

## Mongoose VS. MongoDB

- Brief introductions tot he differences between Mongoose and MongoDB. 
- Brief examples and installation procedure.

### Mongoose 

- Mongoose is a node package.
- Mongoose uses schemas for documents, providing more convenience whe creating and managing data in MongoDB.
- Although if you want to use mongo shell, then use MongoDB. (Simplier). The downside being larger lines of code for validating data.

### MongoDB

- Manages storage and efficient retrival and processing of data.
- Scalable and consistant.
- Collections that hold documents. 


## Getting started

- Make sure to have MongoDB and Node.js installed

`$ npm install mongoose --save`

### Mongoose Schema 

- (shape of the document)/(Array, Boolean, Number, String, etc.).
- Everything in Mongoose starts with a Schema. 
- Each schema maps to a MongoDB collection and defines the shape of the document within the collection.

### Model

- A compiled version of the schema. When you call `mongoose.model()` on a Schema, mongoose compiles a model for you.
- Defines the programming interface for interacting with the database (create, fetch, update, delete,  ect.)



