function dfs (depth){
    if (depth === k+1){
        let check = true;
        for (let i = 0; i < k; i++){
            if (arr[i] === '<'){
                if (selected[i] > selected[i + 1]) check = false;
            }
            else if (arr[i] === '>'){
                if (selected[i] < selected[i + 1]) check = false;
            }
        }
        if (check){
            max = '';
            for (let x of selected) max += x + '';
            if (min === '') min = max;
        }
        return;
    }
    for (let i = 0; i < 10; i++){
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1);
        visited[i] = false;
        selected.pop();
    }
}

const fs = require('fs');
const input = fs.readFileSync('./b2529/input2529.txt').toString().split('\n');

let k = Number(input[0]);
let arr = input[1].split(' ');
let visited = new Array(10).fill(false);
let selected = [];
let max = '';
let min = '';
console.log(arr);
dfs(0);
console.log(max + '\n' + min);