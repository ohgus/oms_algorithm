const fs = require('fs');
const input = fs.readFileSync('./b1240/input1240.txt').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++){
    let [x,y,z] = input[i].split(' ').map(Number);
    graph[x].push([y,z]);
    graph[y].push([x,z]);
}

function dfs (x,dist){
    if (visited[x]) return; // 방문한 곳은 재방문 하지 않는다.
    visited[x] = true; // 노드 방문처리
    distance[x] = dist; // 해당 노드까지 이동하는 비용 수집
    for (let [y,z] of graph[x]) dfs(y, dist + z); // 현재 노드에서 이동가능한 모든 노드들의 비용을 수집하고 방문처리한다.
}

for (let i = 0; i < m; i++){ // m개의 문제를 처리하는 코드
    let [x,y] = input[n + i].split(' ').map(Number); // 문제에서 출발하는 노드,도착하는 노드
    visited = new Array(n + 1).fill(false); // 방문처리 배열
    distance = new Array(n + 1).fill(-1); // 출발노드에서 각각의 노드까지 드는 비용을 수집하는 배열
    dfs(x,0);
    console.log(distance[y]);
}