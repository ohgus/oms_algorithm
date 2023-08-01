const input = require("fs").readFileSync("./11004/11004.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number).sort((a, b) => a - b); // 숫자로 먼저 변환하는게 시간 복잡도에서 유리
console.log(arr[k - 1]);