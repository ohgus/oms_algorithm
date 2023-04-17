const fs = require('fs');
const input = fs.readFileSync('./b9663/input9663.txt').toString().split('\n');

let n = Number(input[0]);
let chess = [];

function can (x,y){ // 지금 놓을 퀸의 행과 열을 표시
    for (let [a,b] of chess){ // 놓아져 있는 퀸의 행과 열
        if (a === x || b === y) return false;
        if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
}

let cnt = 0;
function dfs (row){ // row는 현재 보고있는 행
    if (row === n) cnt += 1; //n번째 행까지 퀸이 다 놓아졌으면 + 1
    for (let i = 0; i < n; i++){
        if (!can(row,i)) continue;
        chess.push([row,i]);
        dfs(row + 1);
        chess.pop();
    }
}

dfs(0);
console.log(cnt);