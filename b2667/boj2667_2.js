function dfs (x,y){
    if (x <= -1 || x >= n || y <= -1 || y >= n) return 0; // 주어진 넓이를 넘어가면 
    if (graph[x][y] === 1){ // 아직 방문하지 않은 인덱스라면
        graph[x][y] = -1; // 방문처리
        let result = 1; // 단지 내의 아파트 수
        result += dfs(x - 1, y); // 상 하 좌 우 를 확인하며 연결된 아파트가 있다면 아파트 수에 더해준다.
        result += dfs(x, y - 1);
        result += dfs(x + 1, y);
        result += dfs(x, y + 1);
        return result;
    }
    return 0;
}

const fs = require('fs');
const input = fs.readFileSync('./b2667/input2667.txt').toString().split('\n');

let n = Number(input[0]); // 마을의 가로세로 넓이
let graph = []; // 아파트의 위치를 담아줄 배열

for (let i = 1; i <= n; i++){
    graph.push(input[i].split('').map(Number)); // 아파트의 위치를 담아준다.
}

let answer = [];
for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        let current = dfs(i,j); // 아파트의 x,y 위치를 받는다.
        if (current > 0) answer.push(current); // 현재 단지내의 아파트 수가 0 보다 많다면 정답에 추가해준다. 
    }
}

answer.sort((a,b) => a - b); // 아파트 수 오름차순 정렬
console.log(answer.length + '\n' + answer.join('\n'));