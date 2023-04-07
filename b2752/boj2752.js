const fs = require('fs');
const input = fs.readFileSync('./b2752/input2752.txt').toString();
let arr = input.split(' ').map(Number);

// 배열을 정렬하는 코드
arr.sort(function(a, b){return a - b;});

// 정렬된 배열의 값을 하나씩 값에 옮겨주는 동작
let sort = '';
for (i = 0; i < arr.length; i++){
    sort += arr[i] + ' ';
} 
console.log(sort);