const fs = require('fs');
const input = fs.readFileSync('./b2438/input2438.txt').toString();
const n = +input;

for (i = 0; i < n; i++){
    console.log('*'.repeat(i+1));
}