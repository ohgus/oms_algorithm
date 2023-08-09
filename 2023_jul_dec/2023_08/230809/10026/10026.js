const input = require("fs").readFileSync("./10026/10026.txt").toString().trim().split("\n");

const n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(""));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
    if (!visited[x][y]) {
        visited[x][y] = true;
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= n || nx < 0 || ny >= n || ny < 0) continue;
            if (graph[x][y] === graph[nx][ny]) dfs(nx, ny);
        }
        return true;
    }
    return false;
}

let result1 = 0;
let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (dfs(i, j)) result1++;
        // if (dfs(i, j, 0)) result1++;
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j] === "G") graph[i][j] = "R";
    }
}

let result2 = 0;
visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (dfs(i, j)) result2++;
    }
}

console.log(result1 + " " + result2);