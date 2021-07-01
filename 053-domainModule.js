// Domain module can handle the error and exception
// var domain = require("domain");

// The syntax to create a domain object is as follows:
// var domain_obj = domain.create();

var EventEmitter = require("events").EventEmitter;
// import "events" module for event emitter
var domain = require("domain"); // import "domain" module
var domain_obj = domain.create(); // create a domain object
domain_obj.on("error", function (err) {
  console.log(err.message + " has been handled!");
});
domain_obj.run(function () {
  var emit_obj = new EventEmitter(); // create an object
  emit_obj.emit("error", new Error("The error")); // trigger error event
});
