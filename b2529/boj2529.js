function dfs (depth){
    if (depth === k + 1){
        let check = true; // 원소가 부등식에 맞게 들어가 있는지 확인.
        for (let i = 0; i < k; i++){ // 부등식과 맞지 않는다면 false로 변환.
            if (arr[i] === '<'){
                if (result[i] > result[i + 1]) check = false;
            }
            else if (arr[i] === '>'){
                if (result[i] < result[i + 1]) check = false;
            }
        }
        if (check){ // 부등식과 맞는 수가 들어왔다면.
            max = ''; // 최대값 초기화.
            for (let x of result) max += x + ''; 
            if (min === '') min = max;
        }
        return;
    }
    for (let i = 0; i < 10; i++){
        if (visited[i]) continue;
        result.push(i);
        visited[i] = true;
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b2529/input2529.txt').toString().split('\n');

let k = Number(input[0]);
let arr = input[1].split(' ');
let visited = new Array(10).fill(false);
let result = []; // 선택된 원소를 넣어주는 배열
let min = '';
let max = '';

dfs(0);
console.log(max + '\n' + min);
