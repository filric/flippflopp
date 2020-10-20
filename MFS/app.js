const express = require('express')
const dBModule = require('./dBModule')
const personmodel = require('./PersonModule')
const messegeModel = require('./MessegeModel')
const app = express()
const port = 3000
const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index.ejs', { name: ""})
})

app.get('/messeges', async (req, res) => {
  let messeges = await messegeModel.getAllMesseges()
  res.render("pages/messeges.ejs", {messeges : messeges})
})

app.post("/", (req, res) => {
  let person = personmodel.newPerson(req.body.name, req.body.email, req.body.age)
  databaseModule.storeElement(person)
  res.render("pages/index.ejs", { name: " " + req.body.name})
})

app.post('/postmessege', async (req, res) => {
  let messege = messegeModel.newMessege(req.body.email, req.body.messege)
  databaseModule.storeElement(messeges)
  let messeges = await messegeModel.getAllMesseges()
  res.render("pages/messeges.ejs", {messeges : messeges})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

app.get('/', (req, res) => res.sendFile(lientDir + "index.html"))

app.get('/style.css', (req, res) => {
  res.sendFile(clientDir + 'style.css')
})
app.get('/scarytomas', (req, res) => {
  res.sendFile(clientDir + "scarytomas.PNG")
})
app.post('/', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.email)
  res.redirect('/')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const personSchema = new mongoose.Schema({
  name: String,
  email: String
  
});

const Person = mongoose.model('Person', personSchema);

