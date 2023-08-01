const input = require("fs").readFileSync("./1152/1152.txt").toString().trim().split(" ");

// if (input[0] === ""){
//     console.log(0);
// } else console.log(input.length);

console.log(input[0] === "" ? 0 : input.length);