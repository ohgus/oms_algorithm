function lowerBound (arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

const input = require("fs").readFileSync("./18353/18353.txt").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number).reverse();

let d = [0];

for (x of arr) {
    console.log(`start d: ${d}`);
    if (d[d.length - 1] < x) d.push(x);
    else {
        let index = lowerBound(d, x , 0, d.length);
        console.log(`index:${index}, x:${x}`);
        d[index] = x;
    }
    console.log(`end d: ${d}`);
}

console.log(n - (d.length - 1));