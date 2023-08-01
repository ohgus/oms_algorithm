const input = require("fs").readFileSync("./1541/1541.txt").toString().trim().split("-");

let res = 0;

for (let i = 0; i < input.length; i++) {
    let cur = input[i].split("+").map(Number).reduce((a, b) => a + b);
    if (i === 0) res += cur;
    else res -= cur;
}

console.log(res);