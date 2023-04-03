const fs = require('fs');
const input = fs.readFileSync('./b5622/input5622.txt').toString();
let dial = {
    0 : '',
    1 : '',
    2 : 'ABC',
    3 : 'DEF',
    4 : 'GHI',
    5 : 'JKL',
    6 : 'MNO',
    7 : 'PQRS',
    8 : 'TUV',
    9 : 'WXYZ'
}
let dialnum = Object.keys(dial);
let dialstr = Object.values(dial);
let sec = 0;

for (i = 0; i < input.length; i++){
    for (j = 0; j < dialnum.length; j++){
        if(dialstr[j].includes(input[i])){
            sec += j+1;
        }
    }
}
console.log(sec);
