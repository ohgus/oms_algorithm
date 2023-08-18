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

const input = require("fs").readFileSync("./5567/5567.txt").toString().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const graph = [];

for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= 1 + m; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}


// const visited = new Array(n + 1).fill(false);
// visited[1] = true;
// let cnt = new Set([1]);
// let que = new Que();
// que.eq([1, 0]);

// while (que.gl() !== 0) {
//     let [n, c] = que.dq();
//     if (c > 0 && c <= 2) {
//         cnt.add(n);
//     }
//     for (let x of graph[n]) {
//         if (!visited[x]) {
//             que.eq([x, c + 1]);
//             visited[x] = true;
//         }
//     }
// }
// console.log(cnt);
// console.log(cnt.size - 1);

// 강의 풀이

const distance = new Array(n + 1).fill(-1);
distance[1] = 0;

let que = new Que();
que.eq(1);

while (que.gl() !== 0) {
    let now = que.dq();
    for (let next of graph[now]) {
        if (distance[next] === -1) {
            distance[next] = distance[now] + 1;
            que.eq(next);
        }
    }
}

let result = 0;
for (let i = 1; i <= n; i++) {
    if (distance[i] !== -1 && distance[i] <= 2) result++;
}
console.log(result - 1);