const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3]	;

function solution(N, stages) {
    var answer = [];
    for(let i = 1; i <= N; i++){
        const cp = stages.filter((e) => e >= i).length; // 현재 스테이지에 있거나 클리어한 플레이어의 수
        const np = stages.filter((e) => e === i).length; // 현재 스테이지에 있는 플레이어의 수
        answer.push([i,np / cp]); // 스테이지 클리어 실패율 
    }
    answer.sort((a,b) => b[1] - a[1]); // 실패율이 높은순으로 내림차순 정렬
    console.log(answer.map((e) => e[0]));
    return answer.map((e) => e[0]); //스테이지만 리턴
}
solution(N, stages);