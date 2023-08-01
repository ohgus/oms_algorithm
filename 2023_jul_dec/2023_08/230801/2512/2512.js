const input = require("fs").readFileSync("./2512/2512.txt").toString().split("\n");

const n = Number(input[0]);
const req = input[1].split(" ").map(Number).sort((a,b) => a - b);
const max = Number(input[2]);

let start = 1;
let end = Math.max(...req);

let total = 0;
while (start <= end) {
    console.log(`start: ${start}, end: ${end}`);
    let mid = parseInt((start + end) / 2);
    let check = 0;
    console.log(`mid: ${mid}`);
    for (let x of req) {
        check += Math.min(x, mid);
    }
    console.log(`check: ${check}, max: ${max}`);
    if (check <= max) {
        total = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
    console.log(`total: ${total}`);
}

console.log(total);