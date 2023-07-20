const fs = require("fs");
const input = fs.readFileSync("./2588/2588.txt").toString().split("\n");

const a = input[0];
const b = input[1];

const n1 = b[2];
const n2 = b[1];
const n3 = b[0];

console.log(Number(a) * Number(n1));
console.log(Number(a) * Number(n2));
console.log(Number(a) * Number(n3));
console.log(Number(a) * Number(b));