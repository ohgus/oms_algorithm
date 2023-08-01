const fs = require("fs");
const input = fs.readFileSync("./2739/2739.txt").toString();

const n = Number(input);

for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}