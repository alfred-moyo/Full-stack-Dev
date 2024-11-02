var express = require('express')
let app = express();

app.use((req,res, next) => {
    console.log('Incoming request to: ' + req.method + req.url);
    next();
});

app.get("/api/products", function(req,res) {
    res.json()
});

app.post("/api/products", function(req,res) {
    
})

app.use(function(request, response) {
    response.status(404).send("Page not found")
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})