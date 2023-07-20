const fs = require("fs");
const input = fs.readFileSync("./2525/2525.txt").toString().split("\n");

// let a = Number(input[0].split(" ")[0]);
// let b = Number(input[0].split(" ")[1]);
let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

// oms
// if (b + c < 60) {
//     b += c;
// } else {
//     if(a + parseInt((b + c) / 60) > 23) {
//         a += parseInt((b + c) / 60) - 24;
//         b = (b + c) % 60;
//     }
//     else {
//         a += parseInt((b + c) / 60);
//         b = (b + c) % 60;
//     }
// }

// oms2
// a = Math.floor((a * 60 + b + c) / 60);
// b = (a * 60 + b + c) % 60;

// if(a >= 24){
//     a -= 24;
// }

// fastcampus
let totalMinute = a * 60 + b + c;
totalMinute %= 1440;
a = parseInt(totalMinute / 60);
b = totalMinute % 60;

console.log(a + " " + b);