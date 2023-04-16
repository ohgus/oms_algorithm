function dfs (arr,depth,start){
    if (depth === 6){
        let lotto = [];
        for (let i of selected) lotto.push(arr[i]);
        for (let x of lotto) answer += x + ' ';
        answer += '\n';
        return;
    }
    for (let i = start; i < arr.length; i++){
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b6603/input6603.txt').toString().split('\n');

for (let i = 0; i < input.length; i++){ // 각각의 케이스 별로 dfs 를 실행시킨다.
    let data = input[i].split(' ').map(Number);
    if (data[0] === 0) break; // 테스트케이스 종료조건
    else {
        n = data[0];
        arr = data.slice(1); // K를 제외한 나머지 수.
        visited = new Array(n).fill(false);
        selected = [];
        answer = '';
        dfs(arr, 0, 0);
        console.log(answer);
    }
}