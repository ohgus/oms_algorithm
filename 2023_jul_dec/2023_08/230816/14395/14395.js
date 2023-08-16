// 강의 풀이

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

const input = require("fs").readFileSync("./14395/14395.txt").toString().split("\n");

let [s, t] = input[0].split(" ").map(Number);

let que = new Que();
que.eq([s, ""]);
let visited = new Set([s]);
let found = false;

if (s === t) {
    console.log(0);
    process.exit();
}

while (que.gl() !== 0) {
    let [v, o] = que.dq();
    if (v > 1e9) continue;
    if (v === t) {
        console.log(o);
        found = true;
        break;
    }
    for (let oper of ["*", "+", "-", "/"]) {
        let next = v;
        if (oper === "*") next *= v;
        if (oper === "+") next += v;
        if (oper === "-") next -= v;
        if (oper === "/" && v !== 0) next = 1;
        if (!visited.has(next)) {
            que.eq([next, o + oper]);
            visited.add(next);
        }
    }
}

if (!found) console.log(-1);