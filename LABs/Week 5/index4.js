var express = require("express");
var path = require("path");
// require your router
var apiRouter = require("./routes/api_router");
var app = express();
var staticPath = path.resolve(__dirname, "static");

app.use(express.static(staticPath));
// use your router
// any URL that starts with '/api' will be
// sent to 'apiRouter',
// such as '/api/users' and '/api/message'
app.use("/api", apiRouter);

app.listen(3000, "0.0.0.0", function() {
    console.log("App started on port 3000");
});