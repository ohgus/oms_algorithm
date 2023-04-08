const fs = require('fs');
const input = fs.readFileSync('./b18870/input18870.txt').toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let xarr = [...new Set(arr)]; // 배열을 중복값을 제거하고 새로운 배열을 생성
xarr.sort((a,b) => a- b); // 새로운 배열을 오름차순으로 정렬

let turn = new Map()
for (i = 0; i < xarr.length; i++){
    turn.set(xarr[i], i);
}
// 새로운 배열을 순서대로 매핑한다.(각각의 인덱스 값이 순위가 된다.) 
let answer = '';
for(x of arr){
    answer += turn.get(x) + " ";
}
// 
console.log(answer);