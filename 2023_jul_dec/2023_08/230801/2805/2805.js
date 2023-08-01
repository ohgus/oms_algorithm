const input = require("fs").readFileSync("./2805/2805.txt").toString().split("\n");

const [treeNum, need] = input[0].split(" ").map(Number);
const treeLen = input[1].split(" ").map(Number);

let cutLen = 0;
let start = 1;
let end = Math.max(...treeLen);

while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let check = 0;
    for (let x of treeLen) {
        if (x > mid) check += x - mid;
    }
    if (check < need) {
        end = mid - 1;
    } else {
        cutLen = mid;
        start = mid + 1;
    }
}

console.log(cutLen);