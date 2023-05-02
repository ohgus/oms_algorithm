const number = 5;
const limit = 3;
const power = 2;

function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++){
        let result = [];
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i%j === 0){
                result.push(i);
                if(i/j !== j)result.push(i/j);
            }
        }
        if(result.length > limit) answer+= power;
        else answer += result.length;
    }
    return answer;
}
// 제곱근을 이용해 시간복잡도를 log_N으로 낮췄다.