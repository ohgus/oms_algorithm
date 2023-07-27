const input = require("fs").readFileSync("./1931/1931.txt").toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
    let time = input[i].split(" ").map(Number);
    arr.push(time);
}

arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
})

let endTime = 0;
let cnt = 0;
console.log(arr);

for (let meet of arr) {
    if (meet[0] >= endTime) {
        cnt++;
        endTime = meet[1];
    }
    console.log(`cnt:${cnt}`);
}

console.log(cnt);