const input = require("fs").readFileSync("./2750/2750.txt").toString().trim().split("\n").map(Number);
// const arr = input.slice(1).sort((a, b) => a - b);
// // for (let x of arr) console.log(x);
// let sorted = "";
// for (let x of arr) sorted += x + "\n";
// console.log(sorted)

// fastcampus 선택 정렬 함수 이용
function select(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
const arr = input.slice(1);
select(arr);
let sorted = "";

for (let x of arr) sorted += x + "\n";
console.log(sorted);