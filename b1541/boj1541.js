const fs = require('fs');
const input = fs.readFileSync('./b1541/input1541.txt').toString().split('\n');

let nums = input[0].split('-'); // 우선 - 를 기준으로 모두 나눠준다.
let sum = 0; // 계산된 값들이 들어올 곳.

for(i =0; i < nums.length; i++){
    let plusnum = nums[i].split('+').map(Number).reduce((a,b) => a + b); // + 를 기준으로 나누어주고 서로의 값을 더해준다.
    if(i == 0){
        sum += plusnum; // 첫번째는 무조건 더하기
    }
    else {
        sum -= plusnum; // 나머지는 빼기
    }
}
console.log(sum);