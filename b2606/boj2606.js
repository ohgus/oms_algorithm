const fs = require('fs');
const input = fs.readFileSync('./b2606/input2606.txt').toString().split('\n');

let cums = Number(input[0]);
let nums = Number(input[1]);
let pairs = [];
for (let i = 1; i <= cums; i++) pairs[i] = [];
for (let i = 2; i <= nums + 1; i++){
    let [x,y] = input[i].split(' ').map(Number);
    pairs[x].push(y); // 하나의 쌍은 서로에게 이동이 가능하다.
    pairs[y].push(x);
}
let cnt = 0;
let visited = new Array(cums+1).fill(false);
function dfs (x){
    visited[x] = true;
    cnt++;
    for (let y of pairs[x]){ // 현재 노드에서 이동이 가능한 노드를 확인.
        if (!visited[y]) dfs(y);
    }
}
dfs(1);
console.log(cnt - 1);