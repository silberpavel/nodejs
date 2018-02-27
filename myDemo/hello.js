var http = require("http");   // module
var app = http.createServer(foo);
app.listen(8080);
function foo(request, response){
    response.writeHead(200);
    response.write("<h1>Hello, world!</h1>");
    setTimeout(function(){
        response.write("The end");
        response.end();
    }, 3000);
}


