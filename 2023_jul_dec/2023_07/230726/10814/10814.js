const input = require("fs").readFileSync("./10814/10814.txt").toString().trim().split("\n");

const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
    // let [age, name] = input[i].split(" ");
    let age = input[i].split(" ").map(Number)[0];
    let name = input[i].split(" ")[1];
    arr.push([age, name]);
}
console.log(arr);
// arr.sort((a, b) => {
//     if (a[0] !== b[0]) return a[0] - b[0];
//     else return 0;
// });

arr.sort((a, b) => a[0] - b[0]);

let answer = "";

for (let x of arr) answer += `${x[0]} ${x[1]}${"\n"}`;
console.log(answer)