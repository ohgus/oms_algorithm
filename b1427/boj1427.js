const fs = require('fs');
const input = fs.readFileSync('./b1427/input1427.txt').toString().split('\n');
let N = input[0];
let count = Array(10).fill(0);
// N에 포함된 숫자들이 등장하는 횟수만큼 증가시킬 배열을 생성.
for(x of N){
    count[Number(x)]++;
}
// 생성된 배열에 N에 포함된 숫자의 인덱스와 동일한 위치를 증가시킴
let answer = '';
for (i = 9; i >= 0; i--){
    for(j = 0; j < count[i]; j++){
        answer += i + '';
    }
}
// 빈 변수에 count의 값들을 내림차순 정렬로 출력
console.log(answer);