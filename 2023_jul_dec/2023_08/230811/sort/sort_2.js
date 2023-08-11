function solution(num) {
    const answer = 
    num.map(e => String(e)).sort((a, b) => (b + a) - (a + b)).join("");
    
    return answer[0] === "0" ? "0" : answer;
}

const num = [3, 30, 34, 5, 9];

console.log(solution(num));