const input = require("fs").readFileSync("./4803/4803.txt").toString().trim().split("\n");

function isCycle(x, pre) {
    visited[x] = true;
    for (let y of graph[x]) {
        if (!visited[y]) {
            if (isCycle(y, x)) return true;
        } else if (y !== pre) return true;
    }
    return false;
}

let line = 0;
let testCase = 1;

while(input[line].split(" ").map(Number)[0] > 0) {
    const [n, m] = input[line].split(" ").map(Number);
    graph = [];
    for (let i = 1; i <= n; i++) graph[i] = [];
    for (let i = line + 1; i <= line + m; i++) {
        let [a, b] = input[i].split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }

    visited = new Array(n + 1).fill(false);
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            if (!isCycle(i, 0)) cnt++;
        }
    }

    if (cnt === 0) console.log(`Case ${testCase}: No trees.`);
    else if (cnt === 1) console.log(`Case ${testCase}: There is one tree.`);
    else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);

    line += m + 1;
    testCase++;
}

