const fs = require('fs');
let input = fs.readFileSync('./b11021/input11021.txt').toString().split('\n');
let testCase = +input[0];

for(i = 1; i <= testCase; i++){
    let eachNum = input[i].split(' ').map(Number);
    const plus = eachNum[0] + eachNum[1];
    let x = i;
    console.log('Case #'+x+':', plus);
}

