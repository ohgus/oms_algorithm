const fs = require('fs');
let input = fs.readFileSync('./input2884.txt').toString().split(' ');

let h = parseInt(input[0]);
let m = parseInt(input[1]);

alarm(h,m);

function alarm (H , M){
     M -= 45;
    
    if (M < 0){
        M += 60 ;
        H -- ;
        if (H === -1){
            H = 23;
        }
    }
    console.log(H, M);
}
