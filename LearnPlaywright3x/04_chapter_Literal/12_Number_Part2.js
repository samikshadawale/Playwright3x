//numeric separators
let million = 1_000_000; // numeric literal with underscores
console.log(million);
console.log(typeof million);
let tinyNumber = 0.000_001; // numeric literal with underscores
console.log(tinyNumber);
console.log(typeof tinyNumber);
let binarySeparator = 0b1010_1010; // binary literal with underscores
console.log(binarySeparator);
console.log(typeof binarySeparator);
let octalSeparator = 0o755_123; // octal literal with underscores
console.log(octalSeparator);
console.log(typeof octalSeparator);
let hexSeparator = 0xFF_FF_FF; // hexadecimal literal with underscores
console.log(hexSeparator);
console.log(typeof hexSeparator);

//BigInt: A special numeric type that can represent integers with arbitrary precision.
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log(bigIntNum);
console.log(typeof bigIntNum);
let big2 = BigInt(1234567890123456789012345678901234567890);
console.log(big2);
console.log(typeof big2);
let bigFromNum =BigInt(42); // converting a number to BigInt
console.log(bigFromNum);
console.log(typeof bigFromNum);

//Special Numeric Values: Infinity and NaN
let positiveInfinity = Infinity;
console.log(positiveInfinity);
console.log(typeof positiveInfinity);
console.log("1/0:", 1/0 ); // Infinity
console.log("0/0:", 0/0 ); // NaN
console.log("-1/0:", -1/0 ); // NaN
let negativeInfinity = -Infinity;
console.log(negativeInfinity);
console.log(typeof negativeInfinity);
let notANumber = NaN;
console.log(notANumber);
console.log(typeof notANumber); 

//-Infinity
//let negativeInfinity = -Infinity;
//console.log(negativeInfinity);
//console.log(typeof negativeInfinity);

//NaN
//let notANumber = NaN;
//console.log(notANumber);
//console.log("0/0:", 0/0); // NaN
//console.log("1/0:", 1/0);
//console.log(typeof notANumber);