function dfs(depth) {
    if (depth === k + 1) {
        let check = true;
        for (let i = 0; i < k; i++) {
            if (arr[i] === '<') {
                if (result[i] > result[i + 1]) check = false;
            } else if (arr[i] === '>') {
                if (result[i] < result[i + 1]) check = false;
            }
        }
        if (check) {
            current = "";
            for (let x of result) current += x + '';
            if (first === '') first = current;
        }
        return;
    }
    for (let i = 0; i < 10; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        result.push(i);
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
    }
}

const input = require('fs').readFileSync('./2529/2529.txt').toString().split('\n');

const k = Number(input[0]);
const arr = input[1].split(' ');
let current = '';
let first = '';
const visited = new Array(10).fill(false);
const result = [];

dfs(0);
console.log(current + '\n' + first);