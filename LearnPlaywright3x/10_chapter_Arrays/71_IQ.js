let nums = [10,23,40,67];
let result = nums.find(temp => temp >20);
console.log (result);

//find index
let index = nums.findIndex(n => n> 20);
console.log(index);

let last =nums.findLast(n => n >20);
console.log(last);

let findLast= nums.findLastIndex(n => n>20);
console.log(findLast);