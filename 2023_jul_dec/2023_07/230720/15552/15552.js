const fs = require("fs");
const input = fs.readFileSync("./15552/15552.txt").toString().split("\n");

const t = Number(input[0]);

let answer = "";

for(let i = 1; i <= t; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    answer += a + b;
    if(i < t) answer += "\n";
}

console.log(answer);