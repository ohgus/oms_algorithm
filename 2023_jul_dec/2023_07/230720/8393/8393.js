const fs = require("fs");
const input = fs.readFileSync("./8393/8393.txt").toString();

const n = Number(input);

let num = 0;
for (let i = 1; i <= n; i++) {
    num += i;
}

console.log(num);

// 등차수열의 합
console.log(n * (n + 1) / 2);