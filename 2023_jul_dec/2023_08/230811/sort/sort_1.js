function solution(arr, c) {
    var answer = [];
    for (let x = 0; x < c.length; x++) {
        let [i, j, k] = c[x];
        let cur = arr.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(cur[k - 1]);
    }
    
    return answer;
}

const arr = [1, 5, 2, 6, 3, 7, 4];
const c = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(arr, c));