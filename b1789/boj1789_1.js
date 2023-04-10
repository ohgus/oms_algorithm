const fs = require('fs');
const input = fs.readFileSync('./b1789/input1789.txt').toString().split('\n');

let n = Number(input);
let num = 1;
let sum = 0;
let count = 0;

while (sum <= n){ 
    if(sum == n){
        break;
    }
    if (sum < n){
        sum += num;        
        num++;
        if (sum > n){
            count --;
            sum -= sum - n; 
        }
    }
    count++;
}
console.log(count); // 꼭 n 의 숫자를 맞출 필요가 없다. count의 수를 출력하는 문제이기 때문에 n을 넘어가면 반복문을 끝내고 count를 한개 줄여주면된다.