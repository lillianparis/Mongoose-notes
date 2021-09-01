// This is how a model is created
const mongoose = require('mongoose');


let peopleSchema = new mongoose.Schema ({
    name: {type: string, required: true },
    age: Number,
    favoriteFoods: [String]
})

let Person = mongoose.model('Person', peopleSchema)

let Michelle = new Person({name: 'Alex', age: '20', favoriteFoods: ['Pasta', 'Wings']})

console.log(Michelle)