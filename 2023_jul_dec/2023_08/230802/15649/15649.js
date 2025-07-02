const input = require("fs").readFileSync("./15649/15649.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
const visited = new Array(n).fill(false);
const selected = [];

let answer = "";

function dfs(arr, depth) {
    if (depth === m) {
        let result = [];
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + " ";
        answer += "\n";
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(arr, 0);
console.log(answer);