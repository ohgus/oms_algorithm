function dfs (x,graph,visited,finished,result){
    visited[x] = true;
    let y = graph[x];
    if (!visited[y]) dfs (y,graph,visited,finished,result);
    if (!finished[y]){ // 배열의 싸이클 여부 확인.
        while (y !== x){ 
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }
    finished[x] = true;
}

const fs = require('fs');
const input = fs.readFileSync('./b2668/input2668.txt').toString().split('\n');

let n = Number(input[0]);

const graph = [0];
for (let i = 1; i <= n; i++){
    graph.push(Number(input[i]));
}
const visited = new Array(n+1).fill(false); 
const finished = new Array(n+1).fill(false);
const result = [];

for (let x = 1; x <= n; x++){ // 원소별 방문여부 확인
    if (!visited[x]) dfs (x,graph,visited,finished,result);
}
result.sort((a,b) => a-b);
console.log(result.length);

for (let i = 0; i < result.length; i++){
    console.log(result[i]);
}