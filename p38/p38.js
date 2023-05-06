const a = 3;
const b = 1;
const n = 20;

function solution(a, b, n) {
    var answer = 0;
    while(n >= a){ // 콜라병 교한이 가능한 동안 반복
        answer += parseInt(n / a) * b; // 교환해서 받은 콜라병의 수
        n = (n - (parseInt(n / a) * a)) + ((parseInt(n / a) * b)); // 교환하고 남은 콜라병의 수
        console.log(n,answer);
    }
    return answer;
}
solution(a, b, n);