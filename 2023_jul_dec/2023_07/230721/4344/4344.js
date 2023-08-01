const fs = require("fs");
const input = fs.readFileSync("./4344/4344.txt").toString().trim().split("\n");

const c = Number(input[0]);

// oms 터미널에서는 정답과 동일 백준에서는 16%에서 오답
// for (let i = 1; i <= c; i++) {
//     let students = input[i][0];
//     let scores = input[i].split(" ").slice(1,students + 1);
//     let sum = 0;
//     let cnt = 0;
//     for(let j = 0; j < students; j++) {
//         sum += Number(scores[j]);
//     }
//     sum /= students;
//     for (let j = 0; j < students; j++) {
//         if(scores[j] > sum) cnt++;
//     }
//     console.log(`${((cnt/students*100)).toFixed(3)}%`);
// }

// fastcampus
for(let t = 1; t <= c; t++){
    let data = input[t].split(" ").map(Number);
    let n = data[0];
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += data[i];
    }
    let a = sum / n;
    let cnt = 0;
    for(let i = 1; i <= n; i++){
        if(data[i] > a) cnt += 1;
    }
    console.log(`${(cnt / n * 100).toFixed(3)}%`);
}