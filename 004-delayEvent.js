// Import events module
var events = require("events");

// Create an event object
var eventObj = new events();

// Bind delayEvent event to a callback function
eventObj.on("delayEvent", () => {
  console.log("The event delays for 6000 milliseconds");
});

// This is the delay function
setTimeout(() => {
  eventObj.emit("delayEvent"); // triggers the event
}, 6000); // 6000 milliseconds

console.log(
  "This will be printed before the delay because node is asynchronous!"
);
