// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
  JS uses IEEE 754 double-precision 64-bit binary format.
*/

//1.Interger Numbers: Whole numbers without decimal points.
let age = 25;
//decimal numbers: Numbers with decimal points.
let pi = 3.14;
let decimal = 45.67;
console.log(age);
console.log(pi);
console.log("Decimal:", decimal);
//Binary Numbers: Numbers represented in base 2 (0s and 1s).
let binaryNum = 0b1010;
console.log("Binary:", binaryNum);
//Octal Numbers: Numbers represented in base 8 (0-7).
let octalNum = 0o755;
console.log("Octal:", octalNum);
//Hexadecimal Numbers: Numbers represented in base 16 (0-9, A-F).
let hexNum = 0xFF;
console.log("Hexadecimal:", hexNum);        

//Floating point literals
let floatNum = 3.14;
console.log("Floating Point:", floatNum);
let floatNum2 = 0.0001;
console.log("Floating Point 2:", floatNum2);
let floatNum3 = 1.5e3; // 1.5 * 10^3
console.log("Floating Point 3:", floatNum3);
let floatNum4 = -0.5; // Negative floating point number
console.log("Floating Point 4:", floatNum4);

//Exponential Notation: A way to represent very large or very small numbers.
let largeNum = 1.23e+6; // 1.23 * 10^6
console.log("Large Number:", largeNum);
let smallNum = 4.56e-3; // 4.56 * 10^-3
console.log("Small Number:", smallNum);