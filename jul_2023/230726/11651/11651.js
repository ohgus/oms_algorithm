const input = require("fs").readFileSync("./11651/11651.txt").toString().trim().split("\n");
const n = Number(input[0]);
console.log(n);

const arr = [];
for(let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr.push([x, y]);
}
console.log(arr);
arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
});
console.log(arr);

let result = "";
for (let x of arr) result += `${x[0]} ${x[1]}${"\n"}`;
console.log(result);