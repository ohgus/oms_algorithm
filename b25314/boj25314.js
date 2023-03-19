const fs = require('fs');
let input = fs.readFileSync('./b25314/input25314.txt').toString();
let printTime = +input;
let l = printTime / 4;

console.log('long '.repeat(l) + 'int');
// repeat 은 () 안에 수만큼 문자열을 반복해줌
