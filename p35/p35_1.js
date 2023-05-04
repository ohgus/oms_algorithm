const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];	

function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a,b)=> b - a);
    while(score.length >= m){
        const arr = score.splice(0,m);
        answer += Math.min(...arr) * m;
        console.log(answer);
    }
    return answer;
}
// 테스트 케이스 11번 부터 시간초과.