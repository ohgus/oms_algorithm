const fs = require('fs');
let input = fs.readFileSync('./input25304.txt').toString().split('\n');

let totalPrice = +input[0];
let caseNum = +input[1];
let itemPrice = 0;
for (i = 2; i <= caseNum+1; i++){
    let priceNum = input[i].split(' ').map(Number);
    let multi = priceNum[0] * priceNum[1];
    // [20000, 5]
    itemPrice += multi;
}
//const itemPrice = priceNum[2] + priceNum[1];
//console.log(itemPrice);
if (itemPrice == totalPrice){
    console.log('Yes');
}
else {
    console.log('No');
}