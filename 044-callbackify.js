// “util.callbackify()” can call a callback function asynchronously.
// “util” is a tool module, which contains many built-in functions such as a
// callback (), insptect(), isArray()…..etc.
// The main function should be prefixed by a keyword “async”.

// 1. Define a main function by using "async" keyword
// async function mainFunction() {...}

// 2. Call the callback fuunction by using callbackify();
// const callbackFunction = util.callbackify(mainFunction);

// 3. Define a callback function by using "=>" symbol
// callbackFunction => {...}

const util = require("util");
async function mainFunction() {
  return "Ruby in 8 Hours";
}
const cbFunction = util.callbackify(mainFunction);
cbFunction((err, data) => {
    if (err) throw err;
    console.log(data);
})
