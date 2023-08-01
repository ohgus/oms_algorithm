const input = require("fs").readFileSync("./18870/18870.txt").toString().trim().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);
const arr2 = [...new Set(arr)].sort((a, b) => a - b);

console.log(arr);
console.log(arr2);

const turn = new Map();
for (let i = 0; i < arr2.length; i++) turn.set(arr2[i], i);

console.log(turn);

let answer = "";
for (let x of arr) answer += `${turn.get(x)} `;
console.log(answer);