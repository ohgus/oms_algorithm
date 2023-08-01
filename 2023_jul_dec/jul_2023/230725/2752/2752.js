// const input = require("fs").readFileSync("./2752/2752.txt").toString().trim().split(" ").map(Number).sort((a, b) => a - b);


// let sorted = "";
// for (let i = 0; i < input.length; i++) {
//     sorted += input[i] + " ";
// }
// console.log(sorted);

// fastcampus 선택정렬 사용
const input = require("fs").readFileSync("./2752/2752.txt").toString().trim().split(" ").map(Number);
function selection(arr) {
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
selection(input);
let sorted = "";
for (let i = 0; i < input.length; i++) {
    sorted += input[i] + " ";
}
console.log(sorted);
