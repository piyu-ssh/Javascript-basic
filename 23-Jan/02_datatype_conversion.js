let num1 = 21
let var1 = "33"

console.log(typeof num1);
console.log(typeof var1);

// itna to basic ha, main cheez yaha se suru ho rhi ha ...
// let say vaiable ko ham convert kar dete ha Number me,

let conVar = Number(var1);
// aab iska type or value check karo, 

console.log(conVar);
console.log(typeof conVar);
// ye number to aa gaya, but kya jarruri ha ki variable me sirf number hi ho ????

let var2 = "123abc"
let conVar2 = Number(var2)
// jaise aisa koi value ho, to iska datatype or value kya hoga ? (Let's see)
console.log(var2);
console.log(typeof conVar2);
// Ye bhi number print de diya, but ye var2 ka datatype kya ha ???
console.log(typeof var2); // string datatype ha ... 
// but conVar2 me data ha kya ???
console.log(conVar2); // NaN datatype ha ye!

