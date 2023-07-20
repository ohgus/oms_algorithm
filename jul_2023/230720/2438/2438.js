const fs = require("fs");
const input = fs.readFileSync("./2438/2438.txt").toString();

const n = Number(input);

for(let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}