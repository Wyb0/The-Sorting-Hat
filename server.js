var path = require("path")
var express = require("express")
var bodyParer =  require("body-parser")

var app = express()
var PORT = 8000

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

