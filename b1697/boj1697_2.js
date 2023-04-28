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
    getLength(){
        return this.ti - this.hi;
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b1697/input1697.txt').toString().split('\n');

const max = 100001; // 문제에서 주어진 최대값이 100000
const [n,k] = input[0].split(' ').map(Number); // 현재 나의 위치와 도착해야하는 지점
const visited = new Array(max).fill(0); // 방문처리를 위한 배열

function bfs(){
    queue = new Queue;
    queue.enqueue(n); // 큐에 출발 위치를 넣어준다.
    while(queue.getLength() !== 0){
        let c = queue.dequeue(); // 현재 위치를 큐의 첫번째 원소로 받는다.
        if(c === k) return visited[c]; // 도착지점에 왔다면
        for(let x of [c - 1,c + 1,c * 2]){ // 이동이 가능한 위치를 하나씩 확인한다.
            if(x < 0 || x >= max) continue; // 이동가능한 위치가 아니라면
            if(visited[x] === 0){ // 아직 방문하지 않은 위치라면
                visited[x] = visited[c] + 1; // 방문처리
                queue.enqueue(x); // 방문한 위치를 큐에 담아준다.
            }
        }
    }
}
console.log(bfs());