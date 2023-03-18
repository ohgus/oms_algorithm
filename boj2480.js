const fs = require('fs');
let input = fs.readFileSync('./input2480.txt').toString().split(' ');
let dice = input.map(Number);

let a = dice[0];
let b = dice[1];
let c = dice[2];

if (a == b && a == c){
    console.log(10000 + (a * 1000));
}
else if (a == b || a == c || b == c){
    if (a == b || a == c){
        console.log(1000+(a*100));
    }
    else if (b == c){
        console.log(1000+(b*100));
    }
}
else {
    console.log(Math.max(...dice)*100)
}