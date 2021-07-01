// Import events module
var events = require("events");

// Create an event object
var eventObj = new events.EventEmitter();

// Bind Event001 event to a callback function
eventObj.on("Event001", () => {
  console.log("Event001 Done!");
});

// Bind Event002 event to a callback function
eventObj.on("Event002", () => {
  console.log("Event002 Done!");
});

// Trigger event Event001
eventObj.emit("Event001");

// Trigger event Event002
eventObj.emit("Event002");

console.log("All the events are succcessfully done!");
