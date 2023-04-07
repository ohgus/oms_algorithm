const fs = require('fs');
const input = fs.readFileSync('./b2750/input2750.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (i = 1; i <= n; i++){
    arr.push(Number(input[i]));
}
arr.sort(function(a,b){
    return a- b;
})
let sor = '';
for (j = 0; j < arr.length; j++){
    sor += arr[j] + '\n';
}
console.log(sor);