const input = require("fs").readFileSync("./1707/1707.txt").toString().split("\n");

// 나의 풀이 => 오답
// let k = Number(input[0]);
// let line = 1;

// while (k--) {
//     let [v, e] = input[line].split(" ").map(Number);
//     const check = new Array(v + 1).fill(0);
//     const graph = [];
//     let cnt = 0;
//     for (let i = 0; i <= v; i++) graph.push([]);
//     for (let i = 1; i <= e; i++) {
//         let [a, b] = input[line + i].split(" ").map(Number);
//         graph[a].push(b);
//         graph[b].push(a);
//     }
//     for (let i of graph) {
//         if (i.length > 0) {
//             for (let j of i) {
//                 check[j]++;
//             }
//         }
//     }
//     for (let i of check) {
//         if (i > 1) cnt++;
//     }
//     console.log(graph);
//     console.log(check);
//     line += e + 1;
//     if (cnt === 1) console.log("YES");
//     else console.log("NO");
// }

// 강의 문제 풀이

class Que {
    constructor() {
        this.items = {};
        this.h = 0;
        this.t = 0;
    }
    eq(item) {
        this.items[this.t] = item;
        this.t++;
    }
    dq() {
        const item = this.items[this.h];
        delete this.items[this.h];
        this.h++;
        return item;
    }
    peek() {
        return this.items[this.h];
    }
    gl() {
        return this.t - this.h;
    }
}

function bfs(x, graph, visited) {
    que = new Que();
    que.eq(x);
    visited[x] = 0;
    while (que.gl() !== 0) {
        x = que.dq();
        for (let y of graph[x]) {
            if (visited[y] === -1) {
                visited[y] = (visited[x] + 1) % 2;
                que.eq(y);
            }
        }
    }
}

function isBipartite(graph, visited) {
    for (let x = 1; x < visited.length; x++) {
        for (let y of graph[x]) if (visited[x] === visited[y]) return false;
    }
    return true;
}

let testCase = Number(input[0]);
let line = 1;

while (testCase--) {
    let [v, e] = input[line].split(" ").map(Number);
    const graph = [];
    for (let i = 1; i <= v; i++) graph[i] = [];
    for (let i = 1; i <= e; i++) {
        let [a, b] = input[line + i].split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    const visited = new Array(v + 1).fill(-1);
    for (let i = 1; i <= v; i++) {
        if (visited[i] === -1) bfs(i, graph, visited);
    }
    line += e + 1;
    if (isBipartite(graph, visited)) console.log("YES");
    else console.log("NO");
}