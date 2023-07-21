const input = require("fs").readFileSync("./1546/1546.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

// oms
// const scores = input[1].split(" ").map(Number);
// const m = Math.max(...scores);

// let sum = 0;
// for(let i = 0; i < testCase; i++){
//     sum += scores[i] / m * 100;
// }
// console.log(sum / testCase);

// fastcampus
const scores = input[1].split(" ").map(Number);

let m = scores.reduce((a, b) => Math.max(a, b));
let u = [];

for(let i = 0; i < testCase; i++) {
    u.push(scores[i] / m * 100);
}
const f = u.reduce((a, b) => a + b);
console.log(f);
console.log(f / testCase);