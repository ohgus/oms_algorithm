let citations = [3, 7, 9, 1, 5, 4 ];

function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => b - a);
    console.log(citations)
    for (let i = 0; i < citations.length; i++){
        if ( i < citations[i]){
            answer ++;
        }
    }
    return answer;
}

console.log(solution(citations));

// 논문의 인용횟수 h  이상인 논문이 h개 이상 있어야 그것이 h-index