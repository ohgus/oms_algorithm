const input = require("fs").readFileSync("./7490/7490.txt").toString().split("\n");

function dfs(result, depth) {
    if (depth === n - 1) { // 현재 순열 처리 (중복 순열)
        let str = ""; // 현재 수식 문자열
        for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
        str += arr[n - 1] + "";
        current = eval(str.split(" ").join("")); // 공백을 제거한 뒤에 수식 계산
        if (current === 0) console.log(str); // 수식의 결과가 0이 되는 경우에 출력
        return;
    }
    for (let x of [" ", "+", "-"]) {
        result.push(x);
        dfs(result, depth + 1);
        result.pop();
    }
}

const testCase = Number(input[0]);
let n = 0;
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
    n = Number(input[tc]);
    arr = [];
    for (let i = 1; i <= n; i++) arr.push(i);
    dfs([], 0);
    console.log();
}