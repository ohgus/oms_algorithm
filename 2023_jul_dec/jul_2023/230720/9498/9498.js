const fs = require("fs");
const input = fs.readFileSync("./9498/9498.txt").toString();

// oms
// if (Number(input) >= 90 && Number(input) <= 100) {
//     console.log("A");
// } else if (Number(input) >= 80 && Number(input) <= 89) {
//     console.log("B");
// } else if (Number(input) >= 70 && Number(input) <= 79) {
//     console.log("C");
// } else if (Number(input) >= 60 && Number(input) <= 69) {
//     console.log("D");
// } else  console.log("F");

// fastcampus
const data = Number(input);

function check(a) {
    if(a >= 90 && a <= 100) console.log("A");
    else if(a >= 80 && a <= 89) console.log("B");
    else if(a >= 70 && a <= 79) console.log("C");
    else if(a >= 60 && a <= 69) console.log("D");
    else console.log("F");
}

check(data);