const fs = require('fs');
const input = fs.readFileSync('./b1987/input1987.txt').toString().split('\n');

let [r,c] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i]);

let dx = [-1,1,0,0]; // 상,하,좌,우 방향
let dy = [0,0,-1,1];
let visited = new Array(26).fill(false); // 방문한 적이 있는 알파벳 집합
let finalDepth = 0; // 최고로 이동할 수 있는 깊이.

function dfs(depth, x, y){
    finalDepth = Math.max(finalDepth,depth);
    for (let i = 0; i < 4; i++){
        let nx = x + dx[i]; // 이동할 방향
        let ny = y + dy[i];
        if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue; // 표를 벗어나면 무시한다.
        if (visited[arr[nx][ny].charCodeAt() - 65]) continue; // 이미 방문한 알파벳은 무시한다.
        visited[arr[nx][ny].charCodeAt() - 65] = true; // 알파벳 방문 처리.
        dfs(depth + 1,nx, ny); // 재귀함수 호출
        visited[arr[nx][ny].charCodeAt() - 65] = false; // 알파벳 방문 취소처리
    }
}

visited[arr[0][0].charCodeAt() - 65] = true; // 좌측 상단에서 출발한다.
dfs(1,0,0);
console.log(finalDepth);
// 알파벳의 방문여부를 set 으로 중복여부를 확인하면 시간초과에 걸린다.
// 알파벳을 모두 아스키코드로 변화해서 방문여부를 확인해야 통과가 가능하다.