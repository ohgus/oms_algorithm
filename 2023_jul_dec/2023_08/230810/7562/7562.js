class Q {
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
    p() {
        return this.i[this.h];
    }
    gl() {
        return this.t - this.h;
    }
}

const input = require("fs").readFileSync("./7562/7562.txt").toString().trim().split("\n");

const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let tc = Number(input[0]);
let line = 1;

while (tc--) {
    const I = Number(input[line]);
    let [x, y] = input[line + 1].split(" ").map(Number);
    const [tx, ty] = input[line + 2].split(" ").map(Number);
    const visited = [];
    for (let i = 0; i < I; i++) visited.push(new Array(I).fill(0));
    
    que = new Q();
    que.eq([x, y]);
    visited[x][y] = 1;
    while (que.gl() !== 0) {
        let cur = que.dq();
        x = cur[0];
        y = cur[1];
        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= I || nx < 0 || ny >= I || ny < 0) continue;
            if (visited[nx][ny] === 0) {
                visited[nx][ny] = visited[x][y] + 1;
                que.eq([nx, ny]);
            }
        }
    }
    line += 3;
    console.log(visited[tx][ty] - 1);
}