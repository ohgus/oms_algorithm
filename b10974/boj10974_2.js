const fs = require('fs');
const input = fs.readFileSync('./b10974/input10974.txt').toString().split('\n');

let n = Number(input[0]);
let answer = [];
function solve (arr) {
    if (arr.length == n){
        answer.push(arr.join(' '));
        return;
    }
    else {
        for (let i = 1; i <= n; i++){
            if (!arr.includes(i)){
                arr.push(i);
                solve(arr);
                arr.pop();
            }
        }
    }
}
solve([]);
console.log(answer.join('\n'));