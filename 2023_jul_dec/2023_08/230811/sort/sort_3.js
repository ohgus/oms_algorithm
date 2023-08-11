function solution(c) {
    var answer = 0;
    c.sort((a, b) => b - a);
    for (let i = c.length; i >= 0; i--) {
        let cnt = 0; 
        for (let j = 0; j < c.length; j++) {
            if (i <= c[j]) cnt++;
        }
        if (cnt >= i) return i;
    }
}

const c = [3, 0, 6, 1, 5];

console.log(solution(c));