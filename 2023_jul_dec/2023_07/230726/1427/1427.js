const input = require("fs").readFileSync("./1427/1427.txt").toString().trim().split("").map(Number).sort((a, b) => b - a).join("");
console.log(input);