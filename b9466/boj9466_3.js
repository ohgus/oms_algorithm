function dfs (x,graph,visited,finished,result){
    visited[x] = true; // 현재 노드 방문 처리
    let y = graph[x]; // 다음으로 방문할 노드
    if (!visited[y]) dfs(y,graph,visited,finished,result); // 다음 노드를 아직 방문하지 않았다면
    if (!finished[y]){ // 다음 노드를 방문한적 있지만 아직 끝나지 않은 노드라면
        while(y !== x){ // 노드가 다음 방향으로 자신을 가르키고 있지 않을 경우
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }
    finished[x] = true;
}

const fs = require('fs');
const input = fs.readFileSync('./b9466/input9466.txt').toString().split('\n');

let testCase = Number(input[0]);
let line = 1;

while (testCase--){
    let n = Number(input[line]);
    const graph = [0,...input[line+1].split(' ').map(Number)];
    const result = [];
    const visited = new Array(n + 1).fill(false);
    const finished = new Array(n + 1).fill(false);

    for (let x = 1; x <= n; x++){
        if (!visited[x]) dfs (x,graph,visited,finished,result);
    }
    line += 2;
    console.log(n - result.length);
}