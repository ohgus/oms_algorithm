const fs = require('fs');
const input = fs.readFileSync('./b2839/input2839.txt').toString().split('\n');

let n = Number(input[0]);
let answer = 0;
let flag = false;

while (n >= 0){
    if(n == 0 || n % 5 == 0){
        answer += parseInt(n/5);
        console.log(answer);
        flag = true;
        break;
    }
    n -= 3;
    answer += 1;
}
if(!flag){
    console.log(-1);
}