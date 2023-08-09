const input = require("fs").readFileSync("./2668/2668.txt").toString().trim().split("\n");

function dfs(x, arr, visited, finished, result) {
    visited[x] = true;
    let y = arr[x];
    if (!visited[y]) dfs(y, arr, visited, finished, result);
    else if (!finished[y]) {
        while (y !== x) {
            result.push(y);
            y = arr[y];
        }
        result.push(x);
    }
    finished[x] = true;
}

const n = Number(input[0]);
const arr = [0];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);
const result = [];

for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, arr, visited, finished, result);
}

console.log(result.length);

result.sort((a, b) => a - b);
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}