const fs = require('fs');
const input = fs.readFileSync('./b10871/input10871.txt').toString().trim().split('\n');
const NX = input[0].split(' ').map(Number);
const N = NX[0];
const X = NX[1];
const arr = input[1].split(' ').map(Number);
let answer = [];

for(i = 0; i < N; i++){
    if(arr[i] < X){
        answer.push(arr[i]);
    }
}
console.log(answer.join(' '));