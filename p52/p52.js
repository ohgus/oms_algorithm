const x = 2;
const n = 5;

function solution(x, n) {
    var answer = [];
    let num = x;
    for(let i = 0; i < n; i++){
        answer.push(num);
        num += x;
        console.log(answer);
    }
    return answer;
}
solution(x, n);