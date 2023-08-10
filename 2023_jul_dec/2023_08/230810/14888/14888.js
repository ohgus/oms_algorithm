const input = require("fs").readFileSync("./14888/14888.txt").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let [add, sub, mul, div] = input[2].split(" ").map(Number);
 
let max = -1e9;
let min = 1e9;

function dfs(index, value) {
    if (index === n) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        return;
    }
    if (add > 0) {
        add--;
        dfs(index + 1, value + arr[index]);
        add++;
    }
    if (sub > 0) {
        sub--;
        dfs(index + 1, value - arr[index]);
        sub++;
    }
    if (mul > 0) {
        mul--;
        dfs(index + 1, value * arr[index]);
        mul++;
    }
    if (div > 0) {
        div--;
        dfs(index + 1, ~~(value / arr[index]));
        div++;
    }
}

dfs(1, arr[0]);

console.log(max);
console.log(min);