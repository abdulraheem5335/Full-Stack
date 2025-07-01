const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delet( path, handler )
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About me')
})

app.get('/contact', (req, res) => {
    res.send('My contact')
})

app.get('/blog/:slug/:first', (req, res) => {
    // console.log(req);
    console.log(req.params);
    console.log(req.query);
    res.send(`hello ${req.params.slug} and ${req.params.first}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to JS from the DB
//     res.send('Hello Intro to JS!')
// })

// // app.get('/blog/intro-to-python', (req, res) => {
// //     // logic to fetch intro to python from the DB
// //     res.send('Hello Intro to Python!')
// // })

// Request Parameter

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
