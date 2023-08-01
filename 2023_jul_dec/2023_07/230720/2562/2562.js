const fs = require("fs");
const input = fs.readFileSync("./2562/2562.txt").toString().split("\n");
const arr = (input.map(x => Number(x)));
const max = Math.max(...arr);
// const i = input.indexOf(String(max));
const i = arr.indexOf(max);
console.log(max + "\n" + (i + 1));