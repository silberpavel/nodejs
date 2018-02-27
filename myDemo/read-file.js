var fs = require("fs");
// var content = fs.readFileSync("big-file.txt");
fs.readFile("big-file.txt", 
function(err, content){
    console.log(decodeURIComponent(content));
});
// console.log(decodeURIComponent(content));
console.log("The end");

