var express = require('express')
var http = require('http')
//call the express function to start a new Express application
var app = express();

app.use((req,res, next) => {
    console.log('Incoming request to: ' + req.url);
    //res.send('Hello World!);
    next();
});

app.use(function(request, response, next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next();
    } else {
        response.statusCode = 403;
        response.end("Not authorized.")
    }
});

app.use(function(request, response, next) {
    response.end('Secret info: the password is "swordfish"!')
});

const server = http.createServer(app);

const PORT  = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});