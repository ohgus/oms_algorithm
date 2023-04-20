function dfs (depth,start){
    if (depth === m){ // 깊이가 치킨집의 최대 개수와 같다면
        let result = [];
        for (let i of selected) result.push(chicken[i]); // 치킨집의 위치를 담아준다.
        let sum = 0;
        for (let [hx,hy] of house){ // 일반집의 위치와 치킨집의 거리를 비교
            let temp = 1e9;
            for (let [cx,cy] of result){
                temp = Math.min(Math.abs(hx - cx) + Math.abs(hy - cy),temp); // 모든 거리를 비교하여 가장 짧은 거리로 바꿔준다.
            }
            sum += temp;
        }
        answer = Math.min(answer,sum); // 가장 짧은 거리를 갱신한다.
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
let chicken = []; //치킨집의 위치를 담을 배열
let house = []; // 일반집의 위치를 담을 배열

for (let i = 1; i <= n; i++){
    let line = input[i].split(' ').map(Number); // x안에 속한 y의 값들
    for (let j = 0; j < n; j++){
        if (line[j] === 1) house.push([i,j]); // 일반집의 좌표를 담는다.
        else if (line[j] === 2) chicken.push([i,j]); // 치킨집의 좌표를 담는다.
    }
}

let visited = new Array(chicken.length).fill(false);
let selected = [];
let answer = 1e9;

dfs (0,0);
console.log(answer);