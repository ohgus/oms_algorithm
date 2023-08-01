const input = require("fs").readFileSync("./16953/16953.txt").toString().trim().split(" ").map(Number);
let a = input[0];
let b = input[1];
let cnt = 1;

while (b >= a) {
    if (b % 2 === 0) {
        b /= 2;
        cnt++;
        console.log(b);
    } else {
        b = (b - 1) / 10;
        cnt++;
        console.log(b);
    }
    if (b < a) {
        console.log(`answer: ${-1}`);
        break;
    } else if (b === a) {
        console.log(`cnt: ${cnt}`);
        break;
    }
}
