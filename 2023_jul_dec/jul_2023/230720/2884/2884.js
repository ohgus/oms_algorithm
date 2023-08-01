const fs = require("fs");
const input = fs.readFileSync("./2884/2884.txt").toString().split(" ");

let h = Number(input[0]); // 0 <= h <= 24
let m = Number(input[1]); // 0 <= m <= 60

if (m < 45) {
    h -= 1;
    m += 15;
    if (h < 0) h = 23;
} else m -= 45;

console.log(h + " " + m);

