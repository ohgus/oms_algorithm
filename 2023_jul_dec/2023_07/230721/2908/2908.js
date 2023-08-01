const input = require("fs").readFileSync("./2908/2908.txt").toString().trim().split(" ");

for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("").map(Number).reverse().join("");
}
console.log(Math.max(...input));