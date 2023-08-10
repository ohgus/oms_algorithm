class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
    }
    dequeue() {
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.items[this.head];
    }
    getLength() {
        return this.tail - this.head;
    }
}

const input = require("fs").readFileSync("./1697/1697.txt").toString().trim().split("\n");

const MAX = 100001;
const [n, k] = input[0].split(" ").map(Number);
const visited = new Array(MAX).fill(0);

function bfs() {
    queue = new Queue();
    queue.enqueue(n);
    while (queue.getLength() !== 0) {
        let cur = queue.dequeue();
        if (cur === k) {
            return visited[cur];
        }
        for (let x of [cur - 1, cur + 1, cur * 2]) {
            if (x < 0 || x >= MAX) continue;
            if (visited[x] === 0) {
                visited[x] = visited[cur] + 1;
                queue.enqueue(x);
            }
        }
    }
}

console.log(bfs());