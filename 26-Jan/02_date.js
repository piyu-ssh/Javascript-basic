const newDate = new Date();

console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toTimeString());
console.log(newDate.toISOString());
console.log(newDate.toLocaleDateString());

// const myCreatedDate = new Date (2020, 0, 1);
// console.log(myCreatedDate.toDateString());
// ye custom date print kar dega!
let myCreatedDate = new Date ("12-01-2025");
console.log(myCreatedDate.toLocaleString());

// Date

let currTime = Date.now();
console.log(currTime);

// ! ye or sikhenge isko project me implement karna parega!!!

