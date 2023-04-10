const fs = require('fs');
const input = fs.readFileSync('./b13305/input13305.txt').toString().split('\n');

let t = Number(input[0]);
let k = input[1].split(' ').map(Number);
let p = input[2].split(' ').map(Number);

let minP = p[0]; // 최소 주유비의 초기화.
for (i = 0; i < t; i++){ // 배열을 돌면서 최소 주유비를 그다음 주유비와 비교해서 높으면 최소 주유비로 변환.
    minP = Math.min(minP, p[i]);
    p[i] = minP;
}

let tp = BigInt(0);
for (i = 0; i < t -1; i++){ // 최종 주유비의 합계를 계산.
    tp += BigInt(k[i]) * BigInt(p[i]);
}
console.log(String(tp));