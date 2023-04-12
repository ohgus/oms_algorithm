
function lowerBound (arr,target,start,end){
    while (start < end){
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1; 
    }
    return end;
}

function upperBound (arr,target,start,end){
    while (start < end){
        let mid = parseInt((start + end) / 2);
        if (arr[mid] > target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function countByRange (arr,leftValue, rightValue){
    let rightIndex = upperBound (arr, rightValue,0,arr.length);
    let leftIndex = lowerBound (arr, leftValue, 0, arr.length)
    return rightIndex - leftIndex;
}

const fs = require('fs');
const input = fs.readFileSync('./b10816/input10816.txt').toString().split('\n');

let n = Number(input[0]);
let arrn = input[1].split(' ').map(Number);
let m = Number(input[2]);
let arrm = input[3].split(' ').map(Number);

arrn.sort((a,b) => a-b);

let answer = '';
for (i = 0; i < m; i++){
    let count = countByRange(arrn,arrm[i],arrm[i]);
    answer += count + ' ';
}
console.log(answer);