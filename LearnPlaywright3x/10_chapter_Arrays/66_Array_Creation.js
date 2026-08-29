let browser = ["Chrome", "Firefox", "Safari", "Edge"];

//Array constructor
let browser2 = new Array("Chrome", "Firefox", "Safari", "Edge");
let scores = new Array(10); // creates an array of length 10 with empty slots   
scores[0] = 100;
console.log(scores.length);

let scores2 = new Array(10, 20, 30); // creates an array with 3 elements    
console.log(scores2.length); // 3
let number = new Array(100,200,300); // creates an array with 3 elements
console.log(number.length); // 3

let test = Array.of(10); // creates an array with 1 element
console.log(test.length); // 1

//Array.from() method
let fromArray = Array.from("Hello"); // creates an array with 5 elements
console.log(fromArray.length); // 5
