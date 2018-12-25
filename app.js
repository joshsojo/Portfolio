
const express = require("express");
const bodyParser = require("body-parser");
const _= require("lodash");

const app = express();

// INITIALIZE EJS ENGINE
app.set("view engine", "ejs");

// USING BODYPARSER AND EXPRESS STATIC
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// GET REQUEST FOR HOME PAGE
app.get("/", function(req, res){
    res.render("home");
})


// INITIALIZE AND LISTEN FOR PORT:3000
let port = 3000;
app.listen(port, function(req, res){
    console.log("Server running on: "+port);
})
