const fs = require("fs");
const input = fs.readFileSync("./10818/10818.txt").toString().split("\n");

// oms
const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

console.log(Math.min(...nums), Math.max(...nums));

// fastcampus
// let n = Number(input[0]);
// let data = input[1].split(' ').map(x => Number(x));
// let minValue = data.reduce((a, b) => Math.min(a, b));
// let maxValue = data.reduce((a, b) => Math.max(a, b));
// console.log(minValue + " " + maxValue);