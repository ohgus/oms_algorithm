const fs = require('fs');
const input = fs.readFileSync('./b11047/input11047.txt').toString().split('\n');
// n,k는 각자의 변수로 선언해야 정답을 받을 수 있다.
let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);
// 동전들을 하나의 배열로 정리.
let arr = [];
for(i = 1; i <= n; i++){
    arr.push(Number(input[i]));
}
// 동전으로 나눈값들을 count에 더해주고 k는 남은 값으로 변환해준다.
let count = 0;
for(j = n - 1; j >= 0; j--){
    count += parseInt(k / arr[j]);
    k %= arr[j];
}
console.log(count);