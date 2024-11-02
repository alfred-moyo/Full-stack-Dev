var express = require('express')
var http = require('http')
let app = express();

//Middleware function loggin incoming requests
app.use((req,res, next) => {
    console.log('Incoming request to: ' + req.method + req.url);
    next();
});

//Routes GET requests to /olivia
app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage")
});

/*app.get("/users/:userid", function(req,res) {
    var userId = parseInt(req.params.userid, 10);
    if (isNaN(userid))
    {
        req.send("user idrequired is not valid !!" + req.params.userid);
    }
}); */

app.get("/collections/products", function(req,res) {
    res.json()
});

app.get("/search", (req,res) =>{
    if (req.query.q === "javascript-themed burrito")
        {
            res.send("Burrito search performed");
        }
        else {
            res.send("Another query and/or parameter")
        }
});

app.use(function(request, response) {
    response.status(404).send("Page not found")
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})