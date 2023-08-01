const input = require("fs").readFileSync("./10816/10816.txt").toString().split("\n");

const cardNum = input[1].split(" ").map(Number).sort((a, b) => a - b);
const m = Number(input[2]);
const mNum = input[3].split(" ").map(Number);
const arr = [];

function lowerBound (arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function upperBound (arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] > target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function countByRange (arr, left, right) {
    let rightIndex = upperBound(arr, right, 0, arr.length);
    let leftIndex = lowerBound(arr, left, 0, arr.length);
    return rightIndex - leftIndex;
}

for (let i = 0; i < m; i++) {
    let cnt = countByRange(cardNum, mNum[i], mNum[i]);
    arr.push(cnt);
}

console.log(arr.join(" "));