const input = require("fs").readFileSync("./1946/1946.txt").toString().trim().split("\n");

// const t = Number(input[0]);
// let caseNum = 1;

// for (let i = 0; i < t; i++) {
//     let n = Number(input[caseNum]);
//     let arr = [];
//     for (let j = caseNum + 1; j <= caseNum + n; j++) {
//         let data = input[j].split(" ").map(Number);
//         arr.push(data);
//     }
//     arr.sort((a, b) => a[0] - b[0]);
//     console.log(arr);
//     let cnt = 0;
//     let min = 100001;
//     for (let [a, b] of arr) {
//         if (b < min) {
//             min = b;
//             cnt++;
//         }
//     }
//     console.log(cnt);
//     caseNum += n + 1;
// }

let t = Number(input[0]);
let line = 1;

for (let tc = 0; tc < t; tc++) {
    let persons = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + persons; i++) {
        let data = input[i].split(" ").map(Number);
        arr.push(data);
    }
    arr.sort((a, b) => a[0] - b[0]);
    let cnt = 0;
    let min = 100001;
    for (let x of arr) {
        if (x[1] < min) {
            min = x[1];
            cnt++;
        }
    }
    console.log(cnt);
    line += persons + 1;
}