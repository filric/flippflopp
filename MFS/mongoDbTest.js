const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
    
});

  personSchema.methods.speak = () => {
    console.log("Hej");
    console.log(presentation);
  }

  const Person = mongoose.model('Person', personSchema);

  const niklas = new Person({ name: 'Niklas', age: 33 });
  const david = new Person({ name: 'David', age: 18 });
  const hugo = new Person({ name: 'Hugo', age: 18 });
  const rasmus = new Person({ name: 'Rasmus', age: 18 });

  niklas.save();
  davis.save();
  hugo.save();
  rasmus.save();


  Person.find(function (err, people) {
    if (err) return console.error(err);
    console.log(people);


  })