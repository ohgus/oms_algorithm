const fs = require('fs');
const input = fs.readFileSync('./b11399/input11399.txt').toString().split('\n');

let n = Number(input[0]);

let arr = input[1].split(' ').map(Number);

arr.sort(function(a,b){return a- b});

let narr = [];
let count = 0;
for(i = 0; i < arr.length; i++){
    count += arr[i];
    narr.push(count);
}
let answer = 0;
for(j = 0; j < narr.length; j++){
    answer += narr[j];
}

console.log(answer);