let validName = "starts with letter";
console.log(validName);

let _validName = "starts with underscore";
console.log(_validName);

let $validName = "starts with dollar sign";
console.log($validName);

let item1 = "letter followed by number";
console.log(item1);
let _temp2 = "underscore followed by number";
console.log(_temp2);
let $var123 = "dollar sign followed by number";
console.log($var123);
let a1_b2 = "letter followed by number and underscore";
console.log(a1_b2);

//let 1stplace = "starts with number"; // This is invalid because variable names cannot start with a number
//let 2ndItem = "starts with number"; // This is invalid because variable names cannot start with a number

//keywords
//let class = "reserved keyword"; // This is invalid because "class" is a reserved keyword in JavaScript
//let function = "reserved keyword"; // This is invalid because "function" is a reserved keyword in JavaScript
//let return = "reserved keyword"; // This is invalid because "return" is a reserved keyword in JavaScript
//let Const = "reserved keyword"; // This is invalid because "const" is a reserved keyword in JavaScript

let MyVariable = "valid variable name"; // This is valid because variable names can start with a capital letter
console.log(MyVariable);

//Unicode characters
let 变量 = "This is a valid variable name using Unicode characters";
console.log(变量);
let café = "This is a valid variable name using Unicode characters";
console.log(café);
let 𝓥ariable = "This is a valid variable name using Unicode characters";
console.log(𝓥ariable);
let \u0061 = "This is a valid variable name using Unicode characters";
console.log(\u0061); // This will print "a" because \u0061 is the Unicode escape sequence for the letter "a"
/*
let my-variable = "This is an invalid variable name because it contains a hyphen"; // This is invalid because variable names cannot contain hyphens
let my name = "This is an invalid variable name because it contains a space"; // This is invalid because variable names cannot contain spaces
let my@name = "This is an invalid variable name because it contains a special character"; // This is invalid because variable names cannot contain special characters except for $ and _
let my#name = "This is an invalid variable name because it contains a special character"; // This is invalid because variable names cannot contain special characters except for $ and _
let my!name = "This is an invalid variable name because it contains a special character"; // This is invalid because variable names cannot contain special characters except for $ and _*/