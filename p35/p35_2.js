const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];	

function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a,b)=> b - a);
    while(score.length >= m){
        const arr = [];
        for(let i = 0; i < m; i++){
            arr.push(score.shift());
        }
        if(arr.length === m) answer += arr.at(-1) * m;
    }
    console.log(answer);
    return answer;
}
solution(k, m, score);
//테스트케이스 11~15 시간초과