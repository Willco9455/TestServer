const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

// GET method route
app.get('/', function (req, res) {
    res.download('static/index.html')
    res.send('GET request to the homepage')
    // console.log(`requrest : ${req.hostname}`)
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

// Using the url to pass data through pages  
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
    res.send(req.params['userId'])
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})