const fs = require('fs');
const input = fs.readFileSync('./b16953/input16953.txt').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let answer = 1;
let flag = false;

while (a <= b){
    if (a == b){
        flag = true;
        break;
    }
    if (b % 2 == 0){b = parseInt(b / 2)} // 2로 나누기 가능한 경우
    else if (b % 10 == 1){b = parseInt(b / 10)} // 10로 나누기 가능한 경우
    else break; // 위 경우가 불가능한 경우
    answer++;
}
if(a == b){
    console.log(answer);
}
else {console.log(-1);}