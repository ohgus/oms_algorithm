function dfs(depth, start){
    if (depth >= 1){
        let st = 1;
        let bt = 0;
        for (let i of result){
            let [s,b] = arr[i];
            st *= s;
            bt += b;
        }
        answer = Math.min(answer, Math.abs(st - bt));
    }
    for (let i = start; i < n; i ++){
        if (visited[i]) continue;
        result.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        result.pop();
        visited[i] = false;
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b2961/input2961.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++){
    arr.push(input[i].split(' ').map(Number));
}
let visited = new Array(n).fill(false);
let result = [];
let answer = 1e9;

dfs(0, 0);
console.log(answer);