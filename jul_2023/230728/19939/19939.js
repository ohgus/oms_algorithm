const input = require("fs").readFileSync("./19939/19939.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let sum = 0;

for (let i = 1; i <= k; i++) {
    sum += i;
}

console.log(sum);

if (sum > n) {
    console.log(-1);
} else {
    console.log(n, sum);
    n -= sum;
    console.log(n, sum);
    if (n % k === 0) console.log(k - 1);
    else console.log(k);
}