const fs = require('fs');
let input = fs.readFileSync('./b11022/input11022.txt').toString().split('\n');
let testCase = +input[0];


for(i = 1; i <= testCase; i++){
    let eachNum = input[i].split(' ').map(Number);
    const a = eachNum[0];
    const b = eachNum[1];
    let x = i;
    console.log('Case #'+x+':', a,'+',b,'=',a+b);
}
