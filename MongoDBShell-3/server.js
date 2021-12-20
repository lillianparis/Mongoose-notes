// We are using MongoDB
const { MongoClient } = require('mongodb');

// Connection URI
const URI = 'mongodb://localhost';
const client = new MongoClient(URI);

// Database Name
const dbName = 'movies';
const db = client.db(dbName);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
 



  db.createCollection("ironman");
  db.createCollection("spiderman");
  db.createCollection("thor");
  db.createCollection("guardians");


  const ironman = db.collection('ironman');
  const spiderman = db.collection("spiderman");
  const thor = db.collection("thor");
  const guardians = db.collection("guardians");
  
  
  try {
   await  ironman.insertMany([
        {"name":"Iron Man","role":"Billionare Inventor","best_character":false,"first_appearance":"Iron Man"},
        {"name":"Happy Hogan","role":"Head of Security","best_character":false,"first_appearance":"Iron Man"},
        {"name":"Pepper Potts","role":"CEO","best_character":false,"first_appearance":"Iron Man"},
        {"name":"Happy Hogan","role":"Head of Security","best_character":false,"first_appearance":"Iron Man"},
        {"name":"SpongeBob","role":"Comedian in Bikini Bottom","best_character":false,"first_appearance":"SpongeBob Square Pants"},
        {"name":"J.A.R.V.I.S.","role":"Tony Starks Right Hand Man","best_character":false, "first_appearance":"Iron Man"}])
        
        
    await spiderman.insertMany([
        {"first_name":"Peter","last_name":"Parker","height_cm":177},
        {"first_name":"Mary","last_name":"Watson","height_cm":"4ft"},
        {"first_name":"Timmy","last_name":"Tim","height_cm":122},
        {"first_name":"Aunt","last_name":"May","height_cm":182}])
        
        
    await thor.insertMany([
        {"name":"Thor","quote":"She didn’t dump me, you know, I dumped her. It was a mutual dumping."},
        {"name":"Jane", "quote":"Thor was here and he just left again. No message, nothing. Not a word."},
        {"name":"Loki","quote":"I assure you, brother, the sun will shine on us again."},
        {"name":"Sif", "quote":"We must go. We must find Thor"},
        {"name":"Odin", "quote": " Whosoever holds this hammer, if he be worthy, shall possess the power of Thor."},
        {"name":"Heimdall", "quote": "Be warned, I shall uphold my sacred oath to protect this realm as its gatekeeper."},
        {"name":"Darcy Lewis","quote":"I am not getting stabbed in the name of science."}
        ])

        await guardians.insertMany([
            {"name":"Star-Lord","Breed":"Human/God"},
            {"name":"Drax", "Breed":"Human Mutate"},
            {"name":"Gamora","Breed":"Zen-Whoberis"},
            {"name":"Nebula", "Breed":"Luphomoid"},
            {"name":"Rocket", "Breed": "Racoon"},
            {"name":"Groot", "Breed": "Tree"},
            {"name":"Yondu","Breed":"Centaurian"}
            ])
   
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); 
    }
    throw error; 
  }
  return 'done.';
}

db.MongoClient
main()
  .then()
  .catch(console.error)
  .finally(() => client.close());