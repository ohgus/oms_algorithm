const fs = require('fs');
const input = fs.readFileSync('./b18870/input18870.txt').toString().split('\n');
let n = Number(input[0]);
let x = input[1].split(' ').map(Number);
let xarr = [...new Set(x)];
let count = [];

for(i = 0; i < n; i++){
    let num = 0;
    for (j = 0; j < xarr.length; j++){
        if (x[i] > xarr[j]){
         num += 1;
        }
    }
   count.push(Number(num));
}
console.log(count);

// 시간복잡도 O(N2)으로 시간초과. 내가 처음 생각한 방식.