const input = require("fs").readFileSync("./15686/15686.txt").toString().trim().split("\n");

// const [n, m] = input[0].split(" ").map(Number);

// function dfs(depth, start) {
//     if (depth === m) {
//         const result = [];
//         for (let i of selected) result.push(chicken[i]);
//         let sum = 0;
//         for (let [hx, hy] of house) {
//             let temp = 1e9;
//             for (let [cx, cy] of result) {
//                 temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
//             }
//             sum += temp;
//         }
//         answer = Math.min(answer, sum);
//         return;
//     }
//     for (let i = start; i < chicken.length; i++) {
//         if (visited[i]) continue;
//         visited[i] = true;
//         selected.push(i);
//         dfs(depth + 1, i + 1);
//         selected.pop();
//         visited[i] = false;
//     }
// }

// const chicken = [];
// const house = [];
// for (let i = 1; i <= n; i++) {
//     let line = input[i].split(" ").map(Number);
//     for (let j = 0; j < n; j++) {
//         if (line[j] === 1) house.push([i, j]);
//         if (line[j] === 2) chicken.push([i, j]);
//     }
// }

// const visited = new Array(chicken.length).fill(false);
// const selected = [];

// let answer = 1e9;
// dfs(0, 0);
// console.log(answer);

function dfs(depth, start) {
    if (depth === m) {
        const result = [];
        for (let i of selected) result.push(c[i]);
        let sum = 0;
        console.log(result);
        for (let [hx, hy] of h) {
            let temp = 1e9;
            for (let [cx, cy] of result) {
                temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
            sum += temp;
        }
        answer = Math.min(answer, sum);
    }
    for (let i = start; i < c.length; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1, i + 1);
        visited[i] = false;
        selected.pop();
    }
}

const [n, m] = input[0].split(" ").map(Number);
console.log(n, m);
const c = [];
const h = [];
for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    for (let j = 0; j < n; j++) {
        if (line[j] === 1) h.push([i, j]);
        if (line[j] === 2) c.push([i, j]);
    }
}
console.log(c, h);

const visited = new Array(c.length).fill(false);
const selected = [];
let answer = 1e9;
dfs(0, 0);
console.log(answer);