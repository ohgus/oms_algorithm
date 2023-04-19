let numbers = [0, 0, 0];

function solution(numbers) {
    var answer = '';
    let mid = numbers.toString().split(',') ;
    mid.sort(function(a,b){
        return (b+a) - (a+b); // a = 3 , b = 30 => (a+b = 330) > (b+a = 303) 이므로 a가 앞으로 온다. 
    })
    for (let i of mid) answer += i;
    return answer[0] === '0' ? '0' : answer; // 만약 답에 0 만 존재한다면 '0'으로 명시한다.
}

console.log(solution(numbers));