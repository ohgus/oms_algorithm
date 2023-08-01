const input = require("fs").readFileSync("./11399/11399.txt").toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
console.log(arr);
let cur = 0;
let sum = 0;

for (let x of arr) {
    cur += x;
    sum += cur;
}
console.log(sum);