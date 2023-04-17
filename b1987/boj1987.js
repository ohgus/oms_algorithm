const fs = require('fs');
const input = fs.readFileSync('./b1987/input1987.txt').toString().split('\n');

let [r,c] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i]);

let dx = [-1,1,0,0]; // 상,하,좌,우 방향
let dy = [0,0,-1,1];
let visited = new Set(); // 방문한 적이 있는 알파벳 집합
let finalDepth = 0; // 최고로 이동할 수 있는 깊이.

function dfs(depth, x, y){
    finalDepth = Math.max(finalDepth,depth);
    for (let i = 0; i < 4; i++){
        let nx = x + dx[i]; // 이동할 방향
        let ny = y + dy[i];
        if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue; // 표를 벗어나면 무시한다.
        if (visited.has(arr[nx][ny])) continue; // 이미 방문한 알파벳은 무시한다.
        visited.add(arr[nx][ny]); // 알파벳 방문 처리.
        dfs(depth + 1,nx, ny); // 재귀함수 호출
        visited.delete(arr[nx][ny]); // 알파벳 방문 취소처리
    }
}

visited.add(arr[0][0]); // 좌측 상단에서 출발한다.
dfs(1,0,0);
console.log(finalDepth);
// 시간초과 재귀함수를 호출하는 횟수가 너무 많은 듯 하다. 