var mustache = require("mustache")
var result = mustache.render("Hi, {{first}} {{last}} !", {
    first: "Alfred",
    last: "Moyo"
});

console.log(result)