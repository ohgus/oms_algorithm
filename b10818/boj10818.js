const fs = require('fs');
const input = fs.readFileSync('./b10818/input10818.txt').toString().trim().split('\n');
const arrNum = +input[0];
const arr = input[1].split(' ').map(Number);
let Max = arr[0];
let Min = arr[0];

for(i = 0; i < arrNum; i++){
    if(Max < arr[i]){
        Max = arr[i];
    }
    if(Min > arr[i]){
        Min = arr[i]
    }
}
console.log(Min+' '+Max);
