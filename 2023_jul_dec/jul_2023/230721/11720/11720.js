const input = require("fs").readFileSync("./11720/11720.txt").toString().trim().split("\n");

const num = Number(input[0]);
// const nums = input[1].split("").map(Number);
// let sum = 0;

// for (let i = 0; i < num; i++) {
//     sum += nums[i];
// }
// console.log(sum);

// fastcampus

const s = input[1];
let sum = 0;

for (let x of s) {
    sum += Number(x);
}
console.log(sum);