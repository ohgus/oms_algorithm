const fs = require('fs');
const input = fs.readFileSync('./b19939/input19939.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let sum = 0; // 0 부터 k 까지의 합
for (i = 0; i < k+1; i++){
    sum += i;
}

if (sum > n){ // 공의 개수가 부족한 경우
    console.log(-1);
}
else { // 공의 개수가 맞는 경우
    n -= sum;
    if (n % k == 0) console.log(k - 1); 
    else console.log(k);
}