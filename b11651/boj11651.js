const fs = require('fs');
const input = fs.readFileSync('./b11651/input11651.txt').toString().split('\n');
const n = Number(input[0]);
let arr = [];
for(i = 1; i <= n; i++){
    let [x,y] = input[i].split(' ').map(Number);
    arr.push([x,y]);
}

function sorting(a,b){
    if (a[1] != b[1]){
        return a[1] - b[1];
    }
    else {
        return a[0] - b[0];
    }
}
// y값을 기준으로 먼저 비교 같다면 x값을 기준으로 비교
arr.sort(sorting);

let answer = '';
for(let point of arr){
    answer += point[0] + ' ' + point[1] + '\n';
}
console.log(answer);
