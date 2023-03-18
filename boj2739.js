const fs = require('fs');
let input = fs.readFileSync('./input2739.txt').toString().split(' ');

let a = parseInt(input);
for(i = 1; i < 10; i++){
 console.log(a, '*',  i,  '=' , (a * i));
}

