const fs = require('fs');
const input = fs.readFileSync('./b2512/input2512.txt').toString().split('\n');

let city = Number(input[0]); // 도시의 수
let wantPrice = input[1].split(' ').map(Number); // 각 도시에서 원하는 금액
let totalPrice = Number(input[2]); // 배정가능한 총예산 금액

let start = 1; // 범위의 시작점
let end = wantPrice.reduce((a,b) => Math.max(a,b)); // 범위의 끝점 (도시에서 원하는 금액중 가장큰 금액)

let finalPrice = 0; // 배정가능한 금액의 상한금액
while (start <= end){ // 이진탐색 (반복문)
    let mid = parseInt((start + end) / 2); // 중간지점 (상한선)
    let setPrice = 0; // 배정금액
    for (x of wantPrice){ // 원하는 금액을 하나씩 확인
        setPrice += Math.min(mid,x); // 예산은 배정
    }
    if (setPrice <= totalPrice){ // 배정한 금액이 총예산보다 작거나 같은 경우 (상한액 증가)
        finalPrice = mid;
        start = mid + 1;
    }
    else { // 배정한 금액이 총예산보다 큰경우 (상한액 감소)
        end = mid - 1;
    }
}
console.log(finalPrice);
// 이진탐색 파라메트릭 서치 연습코드.