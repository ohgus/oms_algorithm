const input = require("fs").readFileSync("./1316/1316.txt").toString().trim().split("\n");

function check(data) {
    let setData = new Set(data[0]);
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== data[i + 1]) {
            if (setData.has(data[i + 1])){
                return false;
            } else {
                setData.add(data[i + 1]);
            }
        }
        console.log(setData);
    }
    return true;
}


const testCase = Number(input[0]);
let cnt = 0;

for (let i = 1; i <= testCase; i++){
    let str = input[i];
    if (check(str)) cnt ++;
}

console.log(cnt);