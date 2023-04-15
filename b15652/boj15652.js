const fs = require('fs');
const input = fs.readFileSync('./b15652/input15652.txt').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];

let answer = '';
function dfs (arr, depth, start){
    if (depth === m){
        let result = [];
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + ' ';
        answer += '\n';
        return;
    }
    for (let i = start; i < arr.length; i++){
        selected.push(i);
        dfs(arr, depth + 1, i); // (start)현재 인덱스와 같거나 큰 값이 들어가야 하므로 인덱스를 그대로 넣어준다
        selected.pop();
    }
}
dfs(arr, 0, 0);
console.log(answer);