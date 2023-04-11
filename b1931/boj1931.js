const fs = require('fs');
const input = fs.readFileSync('./b1931/input1931.txt').toString().split('\n');

let n = Number(input[0]);
let conf = [];

for(i = 1; i <= n; i++){
    let data = input[i].split(' ').map(Number);
    conf.push(data);
}
conf.sort(function(x,y) { // 종료시간을 기준으로 오름차순 정렬.
    if (x[1] !== y[1])return x[1] - y[1]
    else return x[0] - y[0];
});

let count = 1;
let num = 0;
for (i = 1; i < n; i++){ // 만약 종료 시간보다 다음 시작시간이 같거나 크다면 +
    if (conf[num][1] <= conf[i][0]){
        num = i;
        count += 1;
    }
}
console.log(count);