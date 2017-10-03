var path = require("path")
var express = require("express")
var bodyParser =  require("body-parser")
var house = require("./app/data/sortinghat.js")
//console.log(house)

var app = express()
var PORT = process.env.PORT || 8000

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"))
})

app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"))
})

app.get("/houseData", function(req, res){
    res.json(house);
})

app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT)
})