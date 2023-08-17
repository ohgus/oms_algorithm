class Que {
    constructor() {
        this.i = {};
        this.h = 0;
        this.t = 0;
    }
    eq(item) {
        this.i[this.t] = item;
        this.t++;
    }
    dq() {
        const item = this.i[this.h];
        delete this.i[this.h];
        this.h++;
        return item;
    }
    gl() {
        return this.t - this.h;
    }
}

const input = require("fs").readFileSync("./18352/18352.txt").toString().split("\n");

// 나의 풀이 (정답)

// const [n, m, k, x] = input[0].split(" ").map(Number);
// const graph = [];
// const visited = new Array(n + 1).fill(false);
// for (let i = 1; i <= n; i++) graph[i] = [];
// for (let i = 1; i <= m; i++) {
//     let [a, b] = input[i].split(" ").map(Number);
//     graph[a].push(b);
// }

// const answer = [];
// let que = new Que();

// for (let i = 0; i < graph[x].length; i++) {
//     que.eq([x, graph[x][i], 0]);
// }

// visited[x] = true;
// visited[0] = true;

// while (que.gl() !== 0) {
//     let [now, next, cnt] = que.dq();
    
//     if (cnt === k) answer.push(now);
//     if (!visited[next]) {
//         visited[next] = true;
//         if (next === 0) continue;
//         else {
//             if (graph[next].length < 1) que.eq([next, 0, cnt + 1]);
//             else {
//                 for (let i = 0; i < graph[next].length; i++) {
//                     que.eq([next, graph[next][i], cnt + 1]);
//                 }
//             }
//         }
//     }
// }

// const result = new Set(answer);
// const final = [...result];

// if (final.length > 0) {
//     final.sort((a, b) => a - b);
//     for (let x of final) console.log(x);
// } else console.log(-1);

// 강의 풀이

const [n, m, k, x] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
}

const distance = new Array(n + 1).fill(-1);
distance[x] = 0;

let que = new Que();
que.eq(x);

while (que.gl() !== 0) {
    let now = que.dq();
    for (let next of graph[now]) {
        if (distance[next] === -1) {
            distance[next] = distance[now] + 1;
            que.eq(next);
        }
    }
}

let check = false;

for (let i = 1; i <= n; i++) {
    if (distance[i] === k) {
        console.log(i);
        check = true;
    }
}
if (!check) console.log(-1);