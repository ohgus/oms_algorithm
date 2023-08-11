function solution(p) {
    var answer = [];
    const pl = p.length;
    for (let i = 0; i < pl; i++) {
        let cnt = 0;
        for (let j = i + 1; j < pl; j++) {
            if (p[i] <= p[j]) cnt++;
            else {
                cnt++; 
                break;
            }
        }
        answer.push(cnt);
    }
    return answer;
}

const p = [1, 2, 3, 2, 3];

console.log(solution(p));