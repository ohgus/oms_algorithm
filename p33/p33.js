const number = 5;
const limit = 3;
const power = 2;

function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++){
        let cnt = 0;
        for(let j = 1; j <= i; j++){
            if(i%j === 0){
                cnt++;
            }
        }
        if(cnt > limit) answer+= power;
        else answer += cnt;
    }
    return answer;
}
// 시간초과 코드