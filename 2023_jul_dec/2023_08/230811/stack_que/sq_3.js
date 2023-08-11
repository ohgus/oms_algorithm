function solution(s){
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
        if (arr[arr.length - 1] === ")" && arr[arr.length - 2] === "(") {
            arr.pop();
            arr.pop();
        }
    }
    return arr.length === 0 ? true : false;
}

const s = "()()";

console.log(solution(s));