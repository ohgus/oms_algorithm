const fs = require('fs');
const input = fs.readFileSync('./b11650/input11650.txt').toString().split('\n');
let testcase = Number(input[0]);
let arr = [];
for(i = 1; i <= testcase; i++){
    let [x,y] = input[i].split(' ').map(Number);
    arr.push([x,y]);
}

function sorting(a,b){
    if (a[0] !== b[0] ){
        return a[0] - b[0];
    }
    else{
        return a[1] - b[1];
    }
} // 배열 정렬 기준 설정 
arr.sort(sorting); // 배열을 정렬

let finalarr = ''; 
for (let point of arr){
    finalarr += point[0] + ' ' + point[1] + '\n';
}
console.log(finalarr);