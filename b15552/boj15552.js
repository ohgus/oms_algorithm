const fs = require('fs');
const input = fs.readFileSync('./b15552/input15552.txt').toString().split('\n');
const testCase = +input[0];
let answer = '';
// 테스트케이스의 값을 숫자로 변환
for(i = 1; i<= testCase; i++){
    const inputNum = input[i].split(' ').map(Number);
    const plus = inputNum[0] + inputNum[1];
    answer += +plus + '\n';
}
// 각수의 합을 출력
console.log(answer);
// 이번문제는 시간제한이 있느 문제로 for문 안에서 콘솔로그되는 값을 매번 확인하는게 아니라 최족적으로 answer 값을 한번만 확인한다.