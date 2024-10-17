var http = require("http");

function requestHandler(request, response){
    console.log("I have received a request " + request.url);
    response.end("Hello World!")
}

var server = http.createServer(requestHandler);

server.listen(2500)