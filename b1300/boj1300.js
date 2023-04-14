const fs = require('fs');
const input = fs.readFileSync('./b1300/input1300.txt').toString().split('\n');

let n = Number(input[0]);
let k = Number(input[1]);

let start = 1;
let end = 10 ** 10 ;

let answer = 0;
while (start <= end){ //반복문 이진탐색
    let mid = parseInt((start + end) / 2);
    let total = 0; //mid 보다 작거나 같은 데이터의 개수.
    for (i = 1; i <= n; i++){
        total += Math.min(parseInt(mid/i),n); //행마다 n보다 작거나 같은 수의 개수를 계산한다.
    }
    if (total >= k){ // mid 보다 작거나 같은 데이터의 개수가 k 이상이라면.
        answer = mid;
        end = mid -1;
    }
    else start = mid +1;
}
console.log(answer);
