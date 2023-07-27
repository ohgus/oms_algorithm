const input = require("fs").readFileSync("./1789/1789.txt").toString().trim().split("\n");

let s = Number(input);
let sum = 0;
let max = 0;

// for (let i = 1; i < s; i++) {
//     if (sum + i < s && s - i >= i + 1) {
//         sum += i;
//         max = Math.max(max, i);
//     }
//     if (sum === s) break;
// }

while (sum <= s) {
    max ++;
    sum += max;
}
console.log(sum);
console.log(max);