const input = require("fs").readFileSync("./2751/2751.txt").toString().trim().split("\n").map(Number);

const arr = input.slice(1).sort((a, b) => a - b);
let result = "";
for (let x of arr) result += x + "\n";
console.log(result);