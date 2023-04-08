const fs = require('fs');
const input = fs.readFileSync('./b10814/input10814.txt').toString().split('\n');
const n = Number(input[0]);
let arr = [];
for(i = 1; i <= n; i++){
    let [age, name] = input[i].split(' ');
    arr.push([age, name]);
}
// 나이와 이름으로 각각의 요소를 구분

function sorting(a,b){
    if(a[0] !== b[0]) return a[0] - b[0];
    else return 0;
}
// 나이순으로 먼저 정렬하고 만약 나이가 같다면 들어온 순으로 정렬
arr.sort(sorting);

let answer = '';
for(let point of arr){
    answer += point[0] + ' ' + point[1] + '\n';
}
console.log(answer);