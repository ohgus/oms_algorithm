const numbers = [1,2,3,4,6,7,8,0];

function solution(numbers) {
    var answer = 0;
    for(let i = 0; i <= 9; i++){
        if(!numbers.includes(i)){
            answer += i;
        }
    }
    console.log(answer);
    return answer;
}
solution(numbers);