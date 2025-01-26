const number = 6565;
// ye number datatype ha but js isko convert karta ha,
// ek or tarika ha number banane ka,

const newNum = new Number(5246);
// ye number datatype ha, but ye object ha,

console.log(typeof number);
console.log(number);
console.log(typeof newNum);
console.log(newNum);

const str_newNum = newNum.toString();
console.log(typeof str_newNum);

// to fixed
const price = 299
console.log(price.toFixed(2));

const anotherNum = 1199.575646464
console.log(anotherNum.toPrecision(4));

const myCurrentBankBalance = 9999909990;
console.log(myCurrentBankBalance.toLocaleString('en-IN'));
