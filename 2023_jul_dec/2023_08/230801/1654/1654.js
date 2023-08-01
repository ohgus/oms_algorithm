const input = require("fs").readFileSync("./1654/1654.txt").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let maxLen = 0;
let start = 1;
let end = Math.max(...arr);

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let check = 0;
    console.log(`start:${start},mid:${mid},end:${end}`);
    for (let x of arr) {
        check += parseInt(x / mid);
    }
    console.log(`check:${check}`);
    if (k > check) {
        end = mid - 1;
    } else {
        maxLen = mid;
        start = mid + 1;
    }
    console.log(`max:${maxLen}`);
}

console.log(maxLen);