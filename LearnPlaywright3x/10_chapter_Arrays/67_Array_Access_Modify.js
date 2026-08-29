let statuses = ["active", "inactive", "pending"];
console.log(statuses[0]);
console.log(statuses.length);
console.log(statuses[2]); // pending

console.log(statuses[statuses.length - 1]); // pending
console.log(statuses.at(-1)); // pending
console.log(statuses.at(-2)); // inactive

//Modify
statuses[1] = "blocked";
console.log(statuses);

//length
console.log(statuses.length);
