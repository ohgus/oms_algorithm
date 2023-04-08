const fs = require('fs');
const input = fs.readFileSync('./b2751/input2751.txt').toString().split('\n');
let num = Number(input[0]);
let arr = [];
for(i = 1; i <= num; i++){
    arr.push(Number(input[i]));
}
arr.sort(function(a,b){
    return a - b;
})
let nums = '';
for (j = 0; j < arr.length; j++){
    nums += arr[j] + '\n';
}
console.log(nums);