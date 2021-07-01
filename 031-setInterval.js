// Syntax
// setInterval(function, time);
// creates a timer and executes a specified function every
// other several seconds, until press "ctrl+C" to stop running.

function interval() {
    console.log("Keep running, until press ctrl+C");
}

// execute the above function every other 3 seconds
setInterval(interval, 3000);