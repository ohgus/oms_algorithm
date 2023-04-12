const fs = require('fs');
const input = fs.readFileSync('./b2805/input2805.txt').toString().split('\n');

let trees = input[0].split(' ').map(Number)[0];
let need = input[0].split(' ').map(Number)[1];
let treeLen = input[1].split(' ').map(Number);

let start = 0;
let end = treeLen.reduce((a,b) => Math.max(a,b));

let cut = 0;
while (start <= end){
    let mid = parseInt((start + end)/ 2);
    let cutSum = 0;
    for (x of treeLen){ // 현 나무의 길이가 남겨놓을 나무의 길이보다 길다면.
        if (x > mid){cutSum += x - mid;}
    }
    if (cutSum < need){ //자를 나무의 양이 필요한 양보다 적다면.
        end = mid - 1;
    }
    else { // 필요한 양보다 많거나 같다면.
        cut = mid;
        start = mid +1;
    }
}
console.log(cut);
