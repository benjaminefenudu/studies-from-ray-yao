// Net Module is a tool for networking communication.
// var net = require("net");

// 1. The syntax to create a server is as follows:
// var server = net.createServer(function (connection) {});
// "connection" parameter is used for client end.

// Please open the first cmd window, create a server:
var net = require("net");
var server = net.createServer(function (connection) {
    connection.write("Hello, Welcome to Server!\r\n"); // write data
    console.log("A client has connected to the server!");
});server.listen(8080, function(){
    console.log('Server is listening...')
})

