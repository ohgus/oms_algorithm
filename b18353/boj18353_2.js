function lowerBound(arr, target, start, end) { 
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기 
		else start = mid + 1;
    }
    return end; 
}

const fs = require('fs');
const input = fs.readFileSync('./b18353/input18353.txt').toString().split('\n');

let n = Number(input[0]);
let k = input[1].split(' ').map(Number);

k.reverse(); // LIS 문제로 변환을 위해 배열을 역순으로 뒤집어 준다.

let newarr = [0];
for (x of k){
    if (newarr[newarr.length - 1] < x){ // 마지막 원소와 x를 비교해 x가 크다면 뒤에 추가해준다.
        newarr.push(x);
    }
    else { 
        let index = lowerBound (newarr,x,0,newarr.length);
        newarr[index] = x; // 위 함수를 이용해 x보다 작은 원소 뒤에 있는 것을 x로 바꿔준다.
    }
}

console.log(n - (newarr.length - 1));
