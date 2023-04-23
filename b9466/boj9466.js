function dfs (x,graph,visited,finished,result){
    visited[x] = true;
    let y = graph[x];
    if (!visited[y]){
        dfs(y,graph,visited,finished,result);
    }
    else if (!finished[y]){
        while (y !== x){
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }
    finished[x] = true;
}

const fs = require('fs');
const input = fs.readFileSync('./b9466/input9466.txt').toString().split('\n');

let tc = Number(input[0]);
let line = 1;
while (tc --){
    let n = Number(input[line]);
    let graph = [0,...input[line + 1].split(' ').map(Number)];
    let visited = new Array(n + 1).fill(false);
    let finished = new Array(n + 1).fill(false);
    let result = [];

    for (let x = 1; x <= n; x++){
        if (!visited[x]) dfs(x,graph,visited,finished,result);
    }

    line += 2;
    console.log(n - result.length);
}