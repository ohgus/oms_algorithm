const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
    var answer = [];
    const h = [];
    for(let i = 0; i < score.length; i++){
        if(i < k) h.push(score[i]); // k일수 만큼 명예의 전당에 등록;
        else { // 명예의 전당이 이미 가득찼다면
            if(score[i] > Math.min(...h)){ // 현재 명예의 전당 최하점보다 점수가 높다면 최하점과 현재 점수를 바꿔준다.
                h.pop();
                h.push(score[i]);
            }
        }
        h.sort((a,b)=> b-a); // 명예의 전당기록을 내림차순으로 정렬
        answer.push(Math.min(...h)); // 그날의 명예의 전당 최하점을 발표
    }   
    console.log(answer);
    return answer;
}
solution(k, score);