const fs = require('fs');
const input = fs.readFileSync('./b1654/input1654.txt').toString().split('\n');

let k = input[0].split(' ').map(Number)[0];
let n = input[0].split(' ').map(Number)[1];
let kLen = [];
for (i = 1; i <= k; i++){
    kLen.push(Number(input[i]));
}

let start = 1;
let end = kLen.reduce((a,b) => Math.max(a,b));

let len = 0;
while (start <= end){
    let mid = parseInt((start + end)/ 2);
    let check = 0;
    for(x of kLen){
        if(x > mid){ // 현재 배선의 길이가 사용할 길이보다 길다면.
            check += parseInt(x / mid); 
        }
    }
    if (check < n){ // 잘라서 나온 갯수가 필요한 양보다 작다면 자를 길이를 줄여준다.
        end = mid -1;
    }
    else { // 잘라서 나온 갯수가 필요한 양보다 많거나 같다면.
        len = mid ;
        start = mid + 1;
    }
}
console.log(len);