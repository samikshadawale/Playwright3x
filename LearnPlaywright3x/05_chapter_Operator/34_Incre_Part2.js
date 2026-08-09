 let a = 10;
 console.log(++a + a + a++); // 11 + 11 + 11 = 33
 console.log(a); // 12

 let i = 1;
 let result = i++ + ++i; // 1 + 3 = 4
 console.log(result, i); // 4, 3


 let b = 10;
 console.log(++b + ++b); //11 + 12 = 23
 console.log(b); // 12

let c = 34;
let result1 = c++;
console.log(result1); //34
console.log(c); //35