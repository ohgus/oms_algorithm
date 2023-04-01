const fs = require('fs');
const input = fs.readFileSync('./b2675/input2675.txt').toString().trim().split('\n');
const testcase = input.shift();


for (i = 0; i < testcase; i++ ){
    let answer = '';
    let eachq = input[i].split(' ');
    let eachnum = +eachq[0];
    let eachstr = eachq[1];
    for (j = 0; j < eachstr.length; j++ ){
        answer += eachstr[j].repeat(eachnum);
    }
    console.log(answer);
}
