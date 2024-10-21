var express = require("express");
var ALLOWED_IPS = ["127.0.0.1", "123.456.7.89"];
var api = express.Router();

api.use(function(req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed) {
        res.status(401).send("Not authorized!");
    }else {
        next();
    }
});

api.get("/users", function(req, res) { 
    console.log('Incoming request to: ' + req.url);
    response.send("Welcome to Olivia's homepage");
});

api.post("/user", function(req, res) { 
     const data = req.body; //Access the POst data
     console.log(data);
     //send a response back to the client
     // send the received data back as the response 
  res.json({
    message: 'Data recceived successfully!',
    receivedData: data
  })
});

api.get("/messages", function(req, res) {
    res.send("This is a get message request");
});

api.post("/message", function(req, res) {
    res.send("This is a post message request");
});

module.exports = api;