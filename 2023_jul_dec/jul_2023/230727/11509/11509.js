// 해당 문항 fs 모듈 시간초과
// const input = require("fs").readFileSync("./11509/11509.txt").toString().trim().split("\n");

// let cnt = 0;
// let arr = input[1].split(" ").map(Number);

// while (arr.length) {
//     let leng = arr.length;
//     let arrow = arr[0];
//     for (let i = 0; i < leng;) {
//         if (arrow === arr[i]) {
//             arr.splice(i,1);
//             arrow -= 1;
//         } else i++;
//     }
//     cnt++;
// }

// console.log(cnt);

// readline 모듈 fastcampus
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function(line) {
    input.push(line); // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
}).on("close", function() {
    let data = input[1].split(" ").map(Number); // 모든 풍선의 위치 정보 입력받기
    let result = 0;
    let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇 개 있는지
    for (let x of data) {
        if (arrow[x] > 0) { // 해당 높이에 화살이 있다면
            arrow[x] -= 1;
            arrow[x - 1] += 1;
        }
        else { // 해당 높이에 화살이 없다면
            arrow[x - 1] += 1;
            result += 1; // 화살 쏘기
        }
    }
    console.log(result);
    process.exit();
});