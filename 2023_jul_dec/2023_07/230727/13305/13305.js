const input = require("fs").readFileSync("./13305/13305.txt").toString().trim().split("\n");

const n = Number(input[0]);
const km = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);
let min = cost[0];
let sum = BigInt(0);

for (let i = 0; i < cost.length - 1; i++) {
    min = Math.min(min, cost[i]);
    sum += BigInt(min) * BigInt(km[i]);
}
console.log(String(sum));