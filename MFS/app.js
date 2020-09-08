const express = require('express')
const app = express()
const port = 3000


const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))

app.get('/style.css', (req, res) => {
  res.sendFile(clientDir + 'style.css')
})
app.get('/scarytomas', (req, res) => {
  res.sendFile(clientDir + "scarytomas.PNG")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

