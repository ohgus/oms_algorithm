const fs = require('fs');
const input = fs.readFileSync('./b1181/input1181.txt').toString().split('\n');
let n = Number(input[0]);
let arr1 = [];

for (i = 1; i <= n; i++){
    arr1.push (input[i]);
}
let arr = [...new Set(arr1)];
arr.sort((a,b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
        if(a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    } 
})

let answer = '';
for (j = 0; j < arr.length; j++ ){
    answer += arr[j] + '\n';
}
console.log(answer);