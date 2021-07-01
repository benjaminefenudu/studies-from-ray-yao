// Syntax
// clearTimeout(t);
// "t" is an object of the timer.

function delay() {
    console.log("Rust in 8 Hours!")
}
var t = setTimeout(delay, 5000);
clearTimeout(t); // clear the above timer
console.log("The timer has been cleared up!");
