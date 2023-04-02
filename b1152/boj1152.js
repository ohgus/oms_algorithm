const fs = require('fs');
const input = fs.readFileSync('./b1152/input1152.txt').toString().trim().split(' ');
let num = 0;

for (i = 0; i < input.length; i++){
    if(input[i] !== ''){
        num++;
    }
}
console.log(num);

