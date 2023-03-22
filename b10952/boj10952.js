const fs = require('fs');
const input = fs.readFileSync('./b10952/input10952.txt').toString().split('\n');

for (i = 0; i < input.length; i++){
    const eachNum = input[i].split(' ').map(Number);
    const plus = eachNum[0] + eachNum[1];
    if(plus === 0){
        break;
    }
    console.log(plus);
}