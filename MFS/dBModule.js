const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webshop', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

exports.storePerson = (name, email, age) => {
    var person = new Person({
        name: name, 
        email: email, 
        age: age 
       })
   
     person.save(()=>{
       console.log("Successfully saved person in database!")
     })
}