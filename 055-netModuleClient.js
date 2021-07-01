// 2. The syntax to create a client end is as follows:
// var client = net.connect({port: number}, function(){...});
// {port number} is the code to connect the server and client end.

// Please open the second cmd window, create a client end.
// Note: server and client end cannot use the same window.

var net = require("net");
var client = net.connect({ port: 8080 }, function () {
  console.log("Connect to the server!");
});
client.on("data", function (data) {
  // bind "data" event to callback
  console.log(data.toString()); // show data from the server
});
