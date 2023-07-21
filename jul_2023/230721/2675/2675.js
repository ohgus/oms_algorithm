const input = require("fs").readFileSync("./2675/2675.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

// for (let t = 1; t <= testCase; t++){
//     let arr = input[t].split(" ");
//     let num = Number(arr[0]);
//     let str = arr[1].split("");
//     let answer = "";
//     for (let i = 0; i < str.length; i++){
//         answer += str[i].repeat(num);
//     }
//     console.log(answer);
// }

// fastcampus
for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(" ");
    let result = "";
    for (let j = 0; j <= s.length; j++) {
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}