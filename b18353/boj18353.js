const fs = require('fs');
const input = fs.readFileSync('./b18353/input18353.txt').toString().split('\n');

let n = Number(input[0]);
let k = input[1].split(' ').map(Number);
let arr = [];

for (i = 0; i < n; i++){
    if (k[i] > k[i +1]){
        arr.push(k[i]);
    }
    else if (k[i] < k[i + 1]){
        arr.push(k[i+1]);
    }
}
let newArr = new Set(arr);
arr = [...newArr];
console.log(k.length - arr.length);
// 답은 맞게 출력되나 시간초과.