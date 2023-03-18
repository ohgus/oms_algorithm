const fs = require('fs');
const [num1, num2] = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const one = num2 % 10;
const ten = Math.floor((num2 % 100)/10);
const hund = Math.floor(num2/100);

console.log(num1 * one);
console.log(num1 * ten);
console.log(num1 * hund);
console.log(num1 * num2);

