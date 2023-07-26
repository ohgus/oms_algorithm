const input = require("fs").readFileSync("./11047/11047.txt").toString().trim().split("\n");

let [n , k] = input[0].split(" ").map(Number);
let cnt = 0;
// let index = 0;
// const coins = [];
// for (let i = 1; i <= n; i++) coins.push(Number(input[i]));
// coins.sort((a, b) => b - a);

// while (k > 0) {
//     if(k - coins[index] < 0) index++;
//     else{
//         k -= coins[index];
//         cnt ++;
//         console.log(`x:${coins[index]} k:${k}, cnt:${cnt}`);
//     }
// }
// console.log(cnt);

// fastcampus

let arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

for (let i = n - 1; i >= 0; i--) {
    cnt += parseInt(k / arr[i]);
    k %= arr[i];
}

console.log(cnt);