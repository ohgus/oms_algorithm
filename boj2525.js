const fs = require('fs');
let input = fs.readFileSync('./input2525.txt').toString().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let r = Number(input[1]);

h = Math.floor((h * 60 + m + r) / 60);
m = (h * 60 + m + r) % 60;

if(h >= 24){
    h -= 24;
}

console.log(h, m);

