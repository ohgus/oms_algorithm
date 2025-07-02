const input = require("fs").readFileSync("./10971/10971.txt").toString().split("\n");

const n = Number(input[0]);
const city = [];
for (let i = 0; i <= n; i++) city.push([0]);
for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    // console.log(`line:${line}`);
    for (let j = 0; j < n; j++) city[i].push(line[j]);
    // console.log(city);
}

const visited = new Array(n + 1).fill(false);
const result = [];
let minVal = 1e9;

function dfs(depth) {
    if (depth === n - 1) {
        console.log(`result:${result}`);
        let totalCost = 0;
        let cur = 1;
        for (let i = 0; i < n - 1; i++) {
            let nextNode = result[i];
            let cost = city[cur][nextNode];
            console.log(`cur:${cur}, nextNode: ${nextNode}, cost: ${cost}`);
            if (cost === 0) return;
            totalCost += cost;
            cur = nextNode;
            console.log(`totalCost:${totalCost}`);
        }
        let cost = city[cur][1];
        console.log(`car:${cur}, backCost:${cost}`);
        if (cost === 0) return;
        totalCost += cost;
        minVal = Math.min(minVal, totalCost);
        console.log(`min:${minVal}`);
    }
    for (let i = 2; i <= n; i++) {
        if (visited[i]) continue;
        result.push(i);
        visited[i] = true;
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
    }
}

dfs(0);
console.log(minVal);