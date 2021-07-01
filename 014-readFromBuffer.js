// Syntax:
// buf.toString(encoding, start, end);

// encoding: such as ascii, base64, binary, hex, utf8(default).
// start: buffer-reading starts from this index.
// end: buffer-reading ends at this index.

buf = Buffer.alloc(8);
buf[0] = 104;
buf[1] = 101;
buf[2] = 108;
buf[3] = 108;
buf[4] = 111;
buf[5] = 33;
console.log("ascii: " + buf.toString("ascii"));
console.log("ascii, 0, 6: " + buf.toString("ascii", 0, 6));
console.log("utf8, 0, 6: " + buf.toString("utf8", 0, 6));
console.log("undefined, 0, 6: " + buf.toString(undefined, 0, 6));
