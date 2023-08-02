const input = require("fs").readFileSync("./2961/2961.txt").toString().trim().split("\n");

const n = Number(input[0]);
const food = [];
for (let i = 1; i <= n; i++) food.push(input[i]);

const visited = new Array(n).fill(false);
const use = [];
let answer = 1e9;

function dfs(depth, start) {
    if (depth > 0) {
        let result = []
        let sour = [];
        let bitter = [];
        for (let i of use) result.push(food[i]);
        for (let i = 0; i < result.length; i++) {
            let [s, b] = result[i].split(" ").map(Number);
            sour.push(s);
            bitter.push(b);
        }
        let tasteSour = sour.reduce((a, b) => a * b, 1);
        let tasteBitter = bitter.reduce((a, b) => a + b, 0);
        // console.log(tasteBitter, tasteSour);
        answer = Math.min(answer, Math.abs(tasteSour - tasteBitter));
    }
    for (let i = start; i < food.length; i++) {
        if (visited[i]) continue;
        use.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        use.pop();
        visited[i] = false;
    }
}

dfs(0, 0);
console.log(answer);