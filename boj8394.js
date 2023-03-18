const fs = require('fs');
let input = fs.readFileSync('./input8394.txt').toString().split(' ');

let n = +input;
for (i = n; i > 0; i--){
    n = n + (i-1);
}
console.log(n);