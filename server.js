var path = require("path")
var express = require("express")
var bodyParser =  require("body-parser")

var app = express()
var PORT = process.env.PORT || 8000

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT)
})