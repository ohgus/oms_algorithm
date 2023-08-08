const input = require("fs").readFileSync("./2667/2667.txt").toString().trim().split("\n");

function dfs(x, y) {
    if (x >= n || x <= -1 || y >= n || y <= -1) return 0;
    if (graph[x][y] >= 1) {
        graph[x][y] = -1;
        let result = 1;
        result += dfs(x - 1, y);
        result += dfs(x, y - 1);
        result += dfs(x + 1, y);
        result += dfs(x, y + 1);
        console.log(result);
        return result;
    }
    return 0;
}

const n = Number(input[0]);
const graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split("").map(Number));
}
console.log(graph);

const answer = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let current = dfs(i, j);
        if (current > 0) answer.push(current);
        console.log(`answer: ${answer}`);
    }
}

answer.sort((a, b) => a - b);
console.log(answer.length + "\n" + answer.join("\n"));