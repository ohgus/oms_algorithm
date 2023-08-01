const input = require("fs").readFileSync("./2839/2839.txt").toString().trim().split("\n").map(Number);

let n = input;
let cnt = 0;

while (n >= 0) {
    if (n === 0 || n % 5 === 0) {
        cnt += parseInt(n / 5);
        n %= 5;
        console.log(cnt);
        break;
    }
    n -= 3;
    cnt++;
}
if (n > 0 || n < 0) console.log(-1);