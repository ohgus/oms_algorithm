const fs  = require('fs');
const input = fs.readFileSync('./b9086/input9086.txt').toString().trim().split('\n');
const testcase = +input[0];

for (i = 1; i <= testcase; i++){
    let str = input[i];
    let len = str.length;
    let a = str[0];
    let b = str[len - 1];
    console.log(a+b);
}

