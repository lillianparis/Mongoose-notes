### Please refer to the image examples to get started
Let's get started with MongoDB Shell. You can use the MongoDb Shell to create a database and manipulate data.
The MongoDB Shell is a command prompt/terminal that we can use to directly interact with MongoDB.

- Please opem the MongoDB Shell Command prompt/terminal

Now that we have the Shell command prompt open, we can start entering commands in it to create databases, collections, documents, ect.
You can think of theis as the "homepage" where we can see all the databases we have created.

- Let's enter the first command: show databases or show dbs
- Then hit the enter key

You should now see three databses. admin, config, local. These are default databses that we do not want to mess with right now. These databases are automatically created by MongoDB installation.

Let's create our own database that we can interact with. Again we can create as many databases as we want and we can delete them at any time. 

Let's review the structure that we went over in the slides. 
Each database we create can have multiple "collections". Collections are how we catagorize our data. 
Example, you can have a "cars" database and have a collection for Honda cars, Volkswagen cars, ect.

Inside of the collections we have "documents". Documents are each instance of data that we have in our collection. Documents are BSON objects. They look like JSON objects. 

Below is an example of the hierarchy structure of MongoDB. "Cars" is our database: 

    Cars -                                   <------------  Database

       Honda -                                       <------------  Collection 
            -{name:"CR-V"}                       <--
            -{name:"Accord"}                              |----------  Documents
            -{name:"Insight"}                                |
            -{name:"Passport"}                            <--

      Volkswagen -                                       <------------  Collection
            -{name:"Jetta"}                          <--
            -{name:"Atlas"}                                  |---------  Documents
            -{name:"Tiguan"}                        |
            -{name:"Passat"}                      <--


# Shell Commands
help: show help.
db.help(): Show help for database methods	
show dbs: Print a list of all databases on the server.
use <db>: Switch current database to <db>. The mongo shell variable db is set to the current database.
show collections: Print a list of all collections for current database.
show databases: Print a list of all available databases.
db.collection.find(): Find all documents in the collection and returns a cursor.
db.collection.insertOne(): Insert a new document into the collection.
db.collection.insertMany(): Insert multiple new documents into the collection.
db.collection.updateOne(): Update a single existing document in the collection.
db.collection.updateMany(): Update multiple existing documents in the collection.
db.collection.deleteOne(): Delete a single document from the collection.
db.collection.deleteMany(): Delete documents from the collection.
db.collection.drop(): Drops or removes completely the collection.
db.collection.createIndex(): Create a new index on the collection if the index does not exist; otherwise, the operation has no effect.


------------------------------------------------------------------------------------------------------------------

So now that we have a general impression of the mongodb database, let's look at some of the basic 
CRUD (Create,Read,Update,Delete) commands that we can use to manipulate the database, collections and documents. 

First, don't forget you need to use the ( use databaseName) command to switch from each databases. You will need
it to start a new one. 


C - Create

    - db.createCollection("nameOfCollection")          -  Create a collection inside of the database you have
                                                          chosen.

    - db.nameOfCollection.insertOne({"field":"value"}) - Creates a document inside of your collection. This document
                                                         can have as many "fields" and "values" that you want. The name of the field needs to be a string, such as "make" and "model" in the above examples. The values can be strings,
                                                         numbers, booleans and even more complex data structures such as objects and arrays: "field":{x:y} & 
                                                         "field":[1,true,"string"]



    - db.nameOfCollection.insertMany([{"field":"value"},{"field":"value"}]) 
    
                                                        - This commmand allows us to insert multiple documents at the same time. Example: insertMany([{"car":"car1"},{"car":"car2"},{"car":"car3"}]). This can be helpful if you need to add multiple things in your application at the same time or in seeder files for adding "dummy data" to your application.


R - Read

    - db.nameOfCollection.findOne({"field":"value"})   -  This command helps us read data in our database. It helps
                                                          us to find one document. The field and value you enter are a filter for something specific in the document you are looking for. As an example, if you have multiple accounts in your collection, you could look for a person's last name. findOne({"last_name":"Smith"}). This will return a document that has that field and value. *Note: Both the field and value are case sensitive and spelling must be correct. Also, if you have multiple documents that have the last name "Smith", this will return the first on in your document that matches. 
                                                          You can enter multiple fields to filter to help find the account. Example: 
                                                          findOne({"last_name":"Smith","first_name":"Tim","age":30})
                                                          This will look for the document that has all the matching fields and values.

    - db.nameOfCollection.find({"field":"value"})    -    This command will find all instances in your database that
                                                          match the filter fields and values. As above, you can enter as many fields and values that you want to. If you leave it empty, it will show all documents in your collection as we did above. You can add a limit if you want to. Example: find({"last_name":"Smith"}).limit(5)
                                                          This will find the first 5 documents in your database that match the following fields and values. 

    - show databases           - These commands show all the databases currently created in your MongoDB            
    - show dbs



    - show collections         - This command will show all collections inside of the database that you are
                                 currently switched to. 



U - Update
                                        
                                        filter                   update
                                           |                        |
    - db.collectionName.updateOne({"field":"value"},{$set:{"field":"value"}}) --|
                                                                                |
                                                    ----------------------------|-------------------------------    
                                                    This command will allow use to filter for the one document that we are looking for and update it. The first object with field and value is what we use to filter through our documents to find the one we want to update. It is used the exact same way as the find methods above. You can use one or multiple fields and value to search. The second object has a keyword from mongo called "$set". This tells mongodb we are updating something in that document. The second field and value is the name of the field we want to update and the value we want to update. We can either type a field that already exists in the document or we can add a completely new field to the document. Mongo is not picky. 

            
    - db.collectionName.updateMany({"field":"value"},{$set:{"field":"value"}}) -|
                                                                                |
                                                    ----------------------------|-------------------------------
                                                    This command acts as the same above but will allow us to update multiple documents at the same time. We can filter for specific documents to update or we can update all documents by removing the filter. As like above, we can use this to add new fields to documents as well.


D - Delete

    - db.collectionName.deleteOne({"field":"value"}) - This command allows us to delete one document. We use the
                                                       fields and values to filter for the document that we want to delete. *Note: Similar to findOne(), this will delete the first document that matches the fields and values. So be sure to have way to locate the exact document that you want to delete. Remember that mongodb creates a unique id for every document, so that may be a good way to filter. 

    - db.collectionName.deleteMany({"field":"value"}) - This command will delete multiple documents that match the
                                                       filtered fields and values. You can set a limit to it as well. 