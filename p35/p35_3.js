const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];	

function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a,b)=> b - a);
    for(let i = m-1; i < score.length; i += m){
        answer += score[i] * m;
    }
    console.log(answer);
    return answer;
}
solution(k, m, score);