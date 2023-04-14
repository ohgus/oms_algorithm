// 체스판에 n 개의 퀸을 겹치지 않게 놓는 코드.
let n = 8; // 퀸의 개수.
let queens = []; //현제 체스판에 놓이 퀸의 위치 정보들

function possible(x,y) { //x,y 위치에 퀸을 놓을 수 있는지 확인
    for(let [a,b] of queens){ // 현재까지 놓았던 모든 퀸의 위치를 하나씩 확인하며
        if(a == x || b == y) return false; // 행이나 열이 같다면  놓을 수 없음
        if(Math.abs(a - x) == Math.abs(b - y)) return false; // 대각선의 위치도 놓을 수 없음
    }
    return true;
}

let cnt = 0;
function dfs(row){
    if(row == n) cnt += 1; //퀸을 n개 놓을 수 있는 경우 카운트
    for(let i =0; i < n; i++){ // 현재 행(row)에 존재하는 열을 하나씩 확인하며
        if(!possible(row, i)) continue; //현재 위치에 놓을 수 없다면 무시 
        queens.push([row,i]); // 현재 위치에 퀸을 놓기
        dfs(row + 1); // 재귀함수 호출
        queens.pop(); // 현재 위치에서 퀸을 제거
    }
}
dfs(0);
console.log(cnt);