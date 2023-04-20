function dfs (depth, start){
    if (depth === m){
        let result = [];
        for (let i of selected) result.push(chicken[i]);
        let sum = 0;
        for (let [hx,hy] of house){
            let temp = 1e9;
            for (let [cx,cy] of result){
                temp = Math.min(Math.abs(hx - cx) + Math.abs(hy - cy),temp);
            }
            sum += temp;
        }
        answer = Math.min(sum,answer);
        return;
    }
    for (let i = start; i < chicken.length; i++){
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b15686/input15686.txt').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let chicken = [];
let house = [];

for (let i = 1; i <= n; i++){
    let line = input[i].split(' ').map(Number);
    for (let j = 0; j < n; j++){
        if (line[j] === 1) house.push([i,j]);
        else if (line[j] === 2) chicken.push([i,j]);
    }
}
console.log(chicken,house);

let visited = new Array(m).fill(false);
let selected = [];
let answer = 1e9;

dfs(0,0);
console.log(answer);