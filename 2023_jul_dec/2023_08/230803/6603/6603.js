const input = require("fs").readFileSync("./6603/6603.txt").toString().trim().split("\n");

function dfs(arr,depth, start) {
    if (depth === 6) {
        let result = "";
        for (let i of selected) result += arr[i] + " ";
        console.log(result);
        return;
    }
    for (let i = start; i < arr.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}

const len = input.length - 1;
for (let i = 0; i < len; i++) {
    let k = input[i].split(" ").map(Number)[0];
    let s = [];
    for (let j = 1; j <= k; j++) s.push(input[i].split(" ").map(Number)[j]);
    visited = new Array(k).fill(false);
    selected = [];
    dfs(s, 0, 0);
    console.log();
}