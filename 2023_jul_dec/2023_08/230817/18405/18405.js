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

const input = require("fs").readFileSync("./18405/18405.txt").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const graph = [];
const data = [];
for (let i = 0; i < n; i++) {
    graph.push(input[i + 1].split(" ").map(Number));
    for (let j = 0; j < n; j++) {
        if (graph[i][j] !== 0) data.push([graph[i][j], 0, i, j]);
    }
}
data.sort((a, b) => a[0] - b[0]);
let que = new Que();
for (let x of data) que.eq(x);
// console.log(graph, que);

let [ts, tx, ty] = input[n + 1].split(" ").map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (que.gl() !== 0) {
    let [v, s, x, y] = que.dq();
    if (s === ts) break;
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            if (graph[nx][ny] === 0) {
                graph[nx][ny] = v;
                que.eq([v, s + 1, nx, ny]);
            }
        }
    }
}
console.log(graph[tx - 1][ty - 1]);