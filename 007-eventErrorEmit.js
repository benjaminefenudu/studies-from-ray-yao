var events = require('events');
var obj = new events.EventEmitter();
obj.emit("error");   // set an "error" event to trigger
