const fs = require('fs');
const input = fs.readFileSync('./b10951/input10951.txt').toString().trim().split('\n');

for(i = 0; i < input.length; i++){
    const eachNum = input[i].split(' ').map(Number);
    const plus = eachNum[0] + eachNum[1];
    console.log(plus);
}

// input 에서 .trim() 을 넣지 않으면 계속 오답으로 산출된다. 내가 안보이는 공백이 존재하는건가?