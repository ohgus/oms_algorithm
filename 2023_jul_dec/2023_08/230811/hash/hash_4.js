function solution(clothes) {
    var answer = 1;
    const obj = {};
    
    for (let x of clothes) {
        obj[x[1]] = (obj[x[1]] || 0) + 1;
    }
    
    for (let key in obj) {
        answer *= obj[key] + 1;
    }
    
    return answer - 1;
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log(solution(clothes));