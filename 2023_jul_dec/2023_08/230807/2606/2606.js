const input = require("fs").readFileSync("./2606/2606.txt").toString().split("\n");

const cum = Number(input[0]);
const connect = Number(input[1]);
const graph = [];

for (let i = 1; i <= cum; i++) graph[i] = [];
for (let i = 2; i <= cum; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

let cnt = 0;
const visited = new Array(cum + 1).fill(false);

function dfs(x) {
    visited[x] = true;
    cnt ++;
    for (y of graph[x]) {
        if (!visited[y]) dfs(y);
    }
}

dfs(1);
console.log(graph);
console.log(cnt - 1);