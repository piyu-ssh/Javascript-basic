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
// let myCreatedDate = new Date ("12-01-2025");
currMonth = 4
let year = 2004
let month = currMonth - 1;
let day = 17;
let myCreatedDate = new Date (year, month, day);
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());

// TimeStamp

let myTimeStamp = Date.now();
console.log(myTimeStamp);
// ye current date milliseconds me generate karta ha!

console.log(Date.now());
//get.time se created date ki time (seconds) me nikal aati ha, (basically comparision me kaam aata ha)


// Date: 29 January, 2025!
