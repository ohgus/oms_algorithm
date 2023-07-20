const fs = require("fs");
const input = fs.readFileSync("./3052/3052.txt").toString().trim().split("\n").map(Number);

// set
const arr = input.map((e) => e % 42);
const set = new Set(arr);

console.log([...set].length);

// indexOf, filter
// const arr = input.map((e) => e % 42);
// const newArr = arr.filter((e, i) => {
//     return arr.indexOf(e) === i;
// });
// console.log(newArr.length);

// forEach, includes
// const nums = input.map(e => e % 42);
// const arr = [];
// nums.forEach((e) => {
//     if (!arr.includes(e)) {
//         arr.push(e);
//     }
// });
// console.log(arr.length);