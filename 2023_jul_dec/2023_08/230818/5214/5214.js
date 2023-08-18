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

const input = require("fs").readFileSync("./5214/5214.txt").toString().split("\n");

// 강의 풀이

let [n, k, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
    let arr = input[i].split(" ").map(Number);
    for (let x of arr) {
        graph[x].push(n + i);
        graph[n + i].push(x);
    }
}

const visited = new Set([1]);
let que = new Que();
que.eq([1, 1]);
let found = false;

while (que.gl() !== 0) {
    let [dist, now] = que.dq();
    if (now === n) {
        console.log(parseInt(dist / 2) + 1);
        found = true;
        break;
    }
    for (let y of graph[now]) {
        if (!visited.has(y)) {
            que.eq([dist + 1, y]);
            visited.add(y);
        }
    }
}
if (!found) console.log(-1);