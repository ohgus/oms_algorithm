function dfs (depth){ // 2부터 n까지의 수를 하나씩 골라 나열하는 모든 순열을 계산
    if (depth === n - 1){
        let totalCost = 0; //현재 순열에 대한 처리
        let cur = 1; // 1번 노드에서 출발
        for (let i = 0; i < n -1; i++){ // 현재 순열에 따라서 노드 이동
            let nextNode = result[i]; // 다은 이동 노드까지의 비용 계산
            let cost = graph[cur][nextNode];
            if (cost === 0) return; // 이동 불가능하면 무시
            totalCost += cost; // 이동 가능하면 , 비용을 더하고 노드 이동
            cur = nextNode;
        }
        let cost = graph[cur][1]; // 마지막 노드에서 1번으로 돌아오는 것이 필수
        if (cost === 0) return; // 이동 불가능하면 무시
        totalCost += cost; // 이동 가능하면 , 비용을 더하고 노드 이동
        minValue = Math.min(minValue, totalCost); // 경로의 최소 비용 저장
    }
    for (let i = 2; i <= n; i++){
        if (visited[i]) {
            continue;
        } 
        result.push(i);
        visited[i] = true;
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b10971/input10971.txt').toString().split('\n');

let n = Number(input[0]);
let graph = [];
for (let i = 0; i <= n; i ++) graph.push([0]);
for (let i = 1; i <= n; i++){
    line = input[i].split(' ').map(Number);
    for (let j = 0; j < n; j++) graph[i].push(line[j]);
}
let visited = new Array(11).fill(false);
let result = [];
let minValue = 1e9;

dfs(0);
console.log(minValue);