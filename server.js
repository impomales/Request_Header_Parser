var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname + '/views')))
app.set('views', path.join(__dirname + '/views'))

app.get('/', function(req, res) {
    res.render('index.html')
})

app.get('/button', function(req, res) {
    res.end('clicked')
})

app.listen(process.env.PORT || 8080, function() {
    console.log("app is listening at port 8080!")
})