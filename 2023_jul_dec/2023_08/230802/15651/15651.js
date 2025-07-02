const input = require("fs").readFileSync("./15651/15651.txt").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
const selected = [];
let answer = "";

function dfs (arr, depth) {
    if (depth === m) {
        const result = [];
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += `${x} `;
        answer += "\n";
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        selected.push(i);
        dfs(arr, depth + 1);
        selected.pop();
    }
}

dfs(arr, 0);
console.log(answer);