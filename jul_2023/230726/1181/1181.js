const input = require("fs").readFileSync("./1181/1181.txt").toString().trim().split("\n");

// const n = Number(input[0]);
// let data = new Set(input.slice(1));

// let arr = [];
// for (let x of data) arr.push(x);

// arr.sort((a, b) => {
//     if (a.length !== b.length) return a.length - b.length;
//     else {
//         if (a < b) return -1;
//         else if (a > b) return 1;
//         else return 0;
//     }
// });


// let result = "";
// for (let x of arr) result += `${x}${"\n"}`;
// console.log(result);

// fastcampus

const n = Number(input[0]);

let arr = [...new Set(input.slice(1))];

arr.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }
});


let result = "";
for (let x of arr) result += `${x}${"\n"}`;
console.log(result);
