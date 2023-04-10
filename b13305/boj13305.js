const fs = require('fs');
const input = fs.readFileSync('./b13305/input13305.txt').toString().split('\n');

let t = Number(input[0]);
let k = input[1].split(' ').map(Number);
let p = input[2].split(' ').map(Number);
let fp = 0;

for (i = 0; i < k.length; i++){
    if (i == 0){ // 첫번째 합은 무조건 들어가야 한다.
        fp += k[i] * p[i];
    }
    else {
        if (k[i] * p[i-1] >= k[i] * p[i]){ // 만약 이전 주유비가 현재 주유비보다 크거나 같은면 실행.
            fp += k[i] * p[i];
      }
      else { // 이전 주유비가 다음 주유비보다 낮으면 실행.
        fp += k[i] * p[i-1];
      }
    }
}

console.log(fp);