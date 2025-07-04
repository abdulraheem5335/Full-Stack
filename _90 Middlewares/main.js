const express = require('express')
const app = express()
const port = 3000

const blog = require('./routes/blog')



const fs = require('fs')

app.use(express.static("public"))
app.use('/blog', blog)


// Middleware 1 - Logger for out application
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am raheem!"
    fs.appendFileSync("./public/first.txt", `${Date.now()} is a ${req.method}\n`)
  next() // if not used next() request will hang
})

// Middleware 2
app.use((req, res, next) => {
  console.log('LOGGED m2');
  console.log("Client IP:", req.ip);
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
