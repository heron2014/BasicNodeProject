/**
 * Created by anita on 09/06/15.
 */
var http = require("http");
var url = require("url");
/** @namespace http.createServer */
//http.createServer(function(request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello world");
//    response.end();
//}).listen(8888);

//execute your working HTTP server by running node server.js
function start(route, handle) {
    function onRequest(request, response) {
        console.log("Request received");
        //console.log(request.url);
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");

        //response.writeHead(200, {"Content-Type": "text/plain"});
        //var content = route(handle, pathname);
        //response.write(content);
        //response.end();

        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started");
}

exports.start = start;