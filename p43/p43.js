const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
    var answer = 0;
    let tp = 0;
    for(let i = 1; i <= count; i++){
        tp += price * i;
    }
    if(money - tp < 0){
        answer += Math.abs(money - tp);
    }else {
        return 0;
    }  
    return answer;
    // return answer > money ? answer - money : 0; 이렇게 삼항연산자 로도 처리 가능 
}