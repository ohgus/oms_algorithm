const fs = require('fs');
const input = fs.readFileSync('./b11004/input11004.txt').toString().split('\n');
const NK = input[0].split(' ');
const N = Number(NK[0]);
const K = Number(NK[1]);
let nums = input[1].split(' ').map(Number);
let arr = [];
for(i = 0; i < N; i++ ){
    arr.push(Number(nums[i]));
}
arr.sort(function(a,b){
    return a- b;
})
console.log(arr[K - 1]);
