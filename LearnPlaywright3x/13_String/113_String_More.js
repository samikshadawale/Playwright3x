let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespace
let a  = console.log(str.trim());
let a1  = console.log(str.split());

str.trimStart();
str.trimEnd();

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS"); // // "Test: PASS. Retry: FAIL."  (first only)
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS"); // replace all with Regex


// Concatenation

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;