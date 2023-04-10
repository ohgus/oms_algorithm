const fs = require('fs');
const input = fs.readFileSync('./b1946/input1946.txt').toString().split('\n');

let testCase = Number(input[0]);
let testNum = 1;
for (tc = 0; tc < testCase; tc++){
    n = Number(input[testNum]);
    let arr = [];
    for (i = testNum + 1; i <= testNum + n; i++){
        let data = input[i].split(' ').map(Number);
        arr.push(data); // 각각의 성적을 배열로 담아준다. 
    }
    arr.sort(function(x,y) {return x[0] - y[0]}); // 배열을 x 기준으로 오름차순 정렬
    let count = 0;
    let minValue = 100001; // 최소값 의 초기화
    for(let [x,y] of arr){ // 배열속 원소들을 최소값과 비교해서 작다면 최소값을 업데이트
        if (y < minValue){
            minValue = y;
            count += 1; // 최소값이 업데이트 될 때마다 늘어난다.
        }
    }
    console.log(count);
    testNum += n + 1;
}