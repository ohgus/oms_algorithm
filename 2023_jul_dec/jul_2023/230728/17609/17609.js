const input = require("fs").readFileSync("./17609/17609.txt").toString().split("\n");

function palindrome(x) {
    return x === x.split("").reverse().join("");
}

const t = Number(input[0]);
for (let i = 1; i <= t; i++) { // 문자열을 하나씩 확인
    let data = input[i];
    if (palindrome(data)) console.log(0); // 회문인 경우
    else { // 회문이 아닌 경우 유사 회문인지 검사
        let found = false;
        let n = data.length; // 문자열의 길이
        for (let i = 0; i < parseInt(n / 2); i++) {
            if (data[i] !== data[n - i - 1]) { // 대칭이 아닌 인덱스를 찾은 경우
                // 앞쪽에 있는 해당 원소를 삭제하고 회문 검사
                if (palindrome(data.slice(0,i) + data.slice(i + 1, n))) found = true;
                // 뒤쪽에 있는 해당 원소를 삭제하고 회문 검사
                if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) found = true;
                break;
            }
        }
        if (found) console.log(1); // 유사 회문인 경우
        else console.log(2); // 회문, 유사회문 둘다 아닌경우
    }
}