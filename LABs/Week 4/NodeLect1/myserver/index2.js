var http = require("http");

const data = [
    {topic: 'math', location:'London', price:'1000'},
    {topic: 'math', location:'Dubai', price:'500'},
    {topic: 'math', location:'Mauritius', price:'250'},
    {topic: 'math', location:'Malta', price:'100'}

]

const server = http.createServer((req,res) => 
{
    if (req.method === 'GET' && req.url === '/data')
    {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(data));
    }
    else if (req.method === 'GET' && req.url === '/data')
        {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end("Welcome to the text service");
        }
    else (req.method === 'GET' && req.url === '/data')
        {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.end(JSON.stringify({message: 'Error Page Not Found'}));
        }
    
});

server.listen(2500, () => {
    console.log('Server running at http:localhost:2500/data')
});