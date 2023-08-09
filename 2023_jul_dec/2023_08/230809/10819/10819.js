const input = require("fs").readFileSync("./10819/10819.txt").toString().trim().split("\n");

const n = Number(input[0]);
const arr = [...input[1].split(" ").map(Number)];
let max = 0;
const visited = new Array(n).fill(false);
const selected = [];

function dfs(depth) {
    if (depth === n) {
        const result = [];
        let sum = 0;
        for (let x of selected) result.push(arr[x]);
        for (let i = 0; i < n - 1; i++) sum += Math.abs(result[i] - result[i + 1]);
        max = Math.max(max, sum);
    }
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1);
        visited[i] = false;
        selected.pop();
    }
}

dfs(0);
console.log(max);