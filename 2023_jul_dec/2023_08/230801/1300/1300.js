const input = require("fs").readFileSync("./1300/1300.txt").toString().split("\n");

const n = Number(input[0]);
const k = Number(input[1]);

// const b = [];

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         b.push(i * j);
//     }
// }

// b.sort((a, b) => a - b);
// console.log(b[k]);

let start = 1;
let end = n ** n;
let answer = 0;

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    console.log(`start:${start},mid:${mid},end:${end},answer:${answer}`);
    for (let i = 1; i <= n; i++) {
        total += Math.min(parseInt(mid / i), n);
    }
    console.log(`total:${total}, k:${k}`);
    if (total >= k) {
        answer = mid;
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

console.log(answer);