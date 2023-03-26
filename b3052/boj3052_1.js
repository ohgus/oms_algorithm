const fs = require('fs');
const input = fs.readFileSync('./b3052/input3052.txt').toString().trim().split('\n');
let arr = [ ];

input.forEach(x => {const nums = x % 42
    if (arr.indexOf(nums) === -1){
        arr.push(nums);
    }
});
console.log(arr.length);