const express = require('express')
const app = express()
const port = 3002

const data = require('./data.json')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3002)