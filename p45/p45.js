const left = 13;
const right = 17;

function solution(left, right) {
    var answer = 0;
    let num = left;
    while(num <= right){
        let cnt = 1;
        for(let i = 1; i <= num/2; i++){
            if(num % i === 0) cnt++;
        }
        console.log(cnt);
        if(cnt % 2 === 0){
            answer += num;
        }else answer -= num;
        num++;
    }
    console.log(answer);
    return answer;
}
solution(left, right)