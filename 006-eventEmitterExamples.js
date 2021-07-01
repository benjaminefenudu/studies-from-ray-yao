// Import events module
var events = require("events");

// Create an event object
var eventObj = new events.EventEmitter();

// Create an event listener, listener1
var listener1 = function listener1() {
  console.log("listener1 run.");
};

// Create an event listener, listener2
var listener2 = function listener2() {
  console.log("listener2 run.");
};

// Add listener1 to myEvent
eventObj.addListener("myEvent", listener1);

// Add listener2 to myEvent
eventObj.addListener("myEvent", listener2);

// Count how many listeners are working
var number = eventObj.listenerCount("myEvent");
console.log(number + " listeners run");

// Trigger myEvent
eventObj.emit("myEvent");

// Remove listener1
eventObj.removeListener("myEvent", listener1);
console.log("Listener1 has been removed!");

// Trigger myEvent again
eventObj.emit("myEvent");

// Count how many listeners working
var number = eventObj.listenerCount("myEvent");
console.log(number + " listener run.");

console.log("Done!");


// PROCESS FLOW
// ------------

// var events = require("events"); - Import events module

// var eventObj = new events.EventEmitter() - Create an event object

// addListener(event listener) - Add a listener to an event.

// on(event listener) - Bind an event to a listener(callback function).

// once(event, listener) - Bind an event to a one-time listener(callback function)

// listenerCount(event) - Count how many listeners working

// removeListener(event, listener) - Remove a listener

// removeAllListeners([event]) - Remove all listeners

// setMaxListeners(n) - Set the maximum number listeners

// emit(event) - Trigger an event