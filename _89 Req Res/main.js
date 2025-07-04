const express = require('express');
const app = express();
const port = 3000;
const blog = require('./routes/blog.js')
const shop = require('./routes/shop.js')

app.use(express.json());
app.use(express.static("public"))
app.use('/blog', blog);
app.use('/shop', shop);

app.use((req, res, next) => {
    console.log(`🟠 METHOD: ${req.method}, URL: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    console.log(`🟢 User sent a GET REQUEST!`)
    res.send('Hello Worlds!')
})

app.get('/api', (req, res) => {
    res.json({a: 1, b: 3, c: 3, d: 4, name: ["harry", "bro"]})
})

app.get('/index', (req, res) => {
    console.log(`🟢 User sent a GET REQUEST!`)
    res.sendFile('template/index.html', {root: __dirname})
})

app.post('/', (req, res) => {
    console.log(`🟡 User sent a POST REQUEST!`, req.body)
    res.send(`POST REQUEST!`)
})

app.put('/', (req, res) => {
    console.log(`🔴 User sent a PUT REQUEST!`, req.body)
    res.send(`PUT REQUEST!`)
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
