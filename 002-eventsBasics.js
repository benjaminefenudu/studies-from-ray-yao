// Import events module
var events = require("events");

// Create an event object
var eventObject = new events.EventEmitter();

// Bind the event to a callback function
eventObject.on("eventName", function () {});

// Triggers the event
eventObject.emit("eventName");
