const input = require("fs").readFileSync("./1240/1240.txt").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
    let [x, y, z] = input[i].split(" ").map(Number);
    graph[x].push([y, z]);
    graph[y].push([x, z]);
}

console.log(graph);

function dfs(x, dist) {
    if (visited[x]) return;
    visited[x] = true;
    distance[x] = dist;
    for (let [y, z] of graph[x]) dfs(y, dist + z);
}

for (let i = 0; i < m; i++) {
    let [x, y] = input[n + i].split(" ").map(Number);
    visited = new Array(n + 1).fill(false);
    distance = new Array(n + 1).fill(-1);
    dfs(x, 0);
    console.log(distance[y]);
}