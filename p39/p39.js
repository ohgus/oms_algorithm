const number = [-3, -2, -1, 0, 1, 2, 3]	;

function solution(number) {
    var answer = 0;
    for(let i = 0; i < number.length; i++){
        for(let j = i + 1; j < number.length; j++){
            for(let x = j + 1; x < number.length; x++){
                if(number[i]+number[j]+number[x]===0)answer++;
            }
        }
    }
    console.log(answer);
    return answer;
}
solution(number);
// 모든 조합의 수를 계산하여 값이 0이라면 answer를 더해준다.