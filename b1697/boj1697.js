class Queue {
    constructor(){
        this.items = {};
        this.hi = 0;
        this.ti = 0;
    }
    enqueue(item){
        this.items[this.ti] = item;
        this.ti++;
    }
    dequeue(){
        const item = this.items[this.hi];
        delete this.items[this.hi];
        this.hi++;
        return item;
    }
    peek(){
        return this.items[this.hi];
    }
    GL(){
        return this.ti - this.hi;
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b1697/input1697.txt').toString().split('\n');

const max = 100001;
let [n,k] = input[0].split(' ').map(Number);
let visited = new Array(max).fill(0);
function bfs(){
    queue = new Queue;
    queue.enqueue(n);
    while(queue.GL() !== 0){
        let cur = queue.dequeue();
        if(cur === k){
            return visited[cur];
        }
        for(let x of [cur + 1,cur - 1, cur * 2]){
            if(x < 0 || x >= max) continue;
            if(visited[x] === 0){
                visited[x] = visited[cur] + 1;
                queue.enqueue(x);
            }
        }
    }
}
console.log(bfs());