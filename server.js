var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.end('hello...')
})

app.listen(process.env.PORT || 8080, function() {
    console.log("app is listening at port 8080!")
})