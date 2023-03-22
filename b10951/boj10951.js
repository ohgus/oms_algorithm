const fs = require('fs');
const input = fs.readFileSync('./b10951/input10951.txt').toString().trim().split('\n');

for(i = 0; i < input.length; i++){
    const eachNum = input[i].split(' ').map(Number);
    const plus = eachNum[0] + eachNum[1];
    console.log(plus);
}