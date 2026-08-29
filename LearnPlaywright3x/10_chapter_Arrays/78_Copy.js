//shallow copy
//original array will not change if you chnage the copy.

let original = [1,2,3,14,22,45,56,11];
let copy1 = [...original]; //spread
console.log(original);
console.log(copy1);

let copy2 = original.slice();
console.log(copy2);

let copy3 = Array.from(original);
console.log(copy3);

let copy4 = original.concat();
console.log(copy4);
copy4.push(91);
console.log(copy4);