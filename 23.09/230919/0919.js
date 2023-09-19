const input = require("fs").readFileSync('./0919.txt').toString().split("\n");

const n = Number(input[0]);

const a = [];
const b = [];
for (let i = 0; i < n; i++) {
    a.push(input[1].split(" ").map(Number)[i]);
    b.push(input[2].split(" ").map(Number)[i]);
}
a.sort((a, b) => a - b);
b.sort((a, b) => b - a);
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += a[i] * b[i];
}
console.log(a, b);
console.log(sum);