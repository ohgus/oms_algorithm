const input = require("fs").readFileSync("./9466/9466.txt").toString().trim().split("\n");

function dfs(x, graph, visited, finished, result) {
    visited[x] = true;
    let y = graph[x];
    if (!visited[y]) {
        dfs(y, graph, visited, finished, result);
    } else if (!finished[y]) {
        while (y !== x) {
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }
    finished[x] = true;
}

let testCase = Number(input[0]);
let line = 1;

while (testCase--) {
    let n = Number(input[line]);
    const graph = [0, ...input[line + 1].split(" ").map(Number)];
    const visited = new Array(n + 1).fill(false);
    const finished = new Array(n + 1).fill(false);
    const result = [];

    for (let x = 1; x <= n; x++) {
        if (!visited[x]) dfs(x, graph, visited, finished, result);
    }

    line += 2;
    console.log(n - result.length);
}