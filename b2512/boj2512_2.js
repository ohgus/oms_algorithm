const fs = require('fs');
const input = fs.readFileSync('./b2512/input2512.txt').toString().split('\n');

let city = Number(input[0]);
let money = input[1].split(' ').map(Number);
let bigMoney = Number(input[2]);

let start = 1;
let end = money.reduce((a,b) => Math.max(a,b));

let maxMoney = 0;
while (start <= end){
    let mid = parseInt((start + end) / 2);
    let checkMoney = 0;
    for(x of money){
        checkMoney += Math.min(x, mid);
    }
    if (checkMoney <= bigMoney){
        maxMoney = mid;
        start = mid + 1;
    }
    else {
        end = mid - 1;
    }
}
console.log(maxMoney);