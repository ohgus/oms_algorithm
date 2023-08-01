const fs = require("fs");
const input = fs.readFileSync("./2480/2480.txt").toString();

const [a, b, c] = input.split(" ").map(Number);

let money = 0;
if (a === b && a === c) {
    money += 10000 + a * 1000;
} else if (a === b || a === c) {
    money += 1000 + a * 100;
} else if (b === c) {
    money += 1000 + b * 100;
} else {
    money += Math.max(a, b, c) * 100;
}
console.log(money);