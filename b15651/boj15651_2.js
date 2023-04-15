const fs = require('fs');
const input = fs.readFileSync('./b15651/input15651.txt').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];

let answer = '';
function dfs (arr, depth){
    if (depth === m){
        let result = [];
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + ' ';
        answer += '\n';
        return;
    }
    for (let i = 0; i < arr.length; i ++){
        selected.push(i);
        dfs(arr, depth + 1);
        selected.pop();
    }
}
dfs(arr, 0);
console.log(answer);