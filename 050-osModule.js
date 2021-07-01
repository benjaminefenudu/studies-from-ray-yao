// OS Module contains many operating system functions.
// OS Module can get information about the operating system.
// var os = require("os");

var os = require("os");
console.log("The information of the current OS is as follows:");

// Host Name
console.log("The host name is: " + os.hostname());

// OS Type
console.log("The type of the operating system is: " + os.type());

// OS Platform
console.log("The OS platform is: " + os.platform());

// Total Memory
console.log("The total memory is: " + os.totalmem() + " bytes");

// Free Memory
console.log("The free memory is: " + os.freemem() + " bytes");

// OS Version
console.log("The OS version is: " + os.release() + " version");

// OS Runtime
console.log("The OS runtime is: " + os.uptime() + " seconds");
