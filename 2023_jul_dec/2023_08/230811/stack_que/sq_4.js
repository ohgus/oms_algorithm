function solution(p, l) {
    const index = [];
    let cnt = 1;
    for (let i = 0; i < p.length; i++) index.push(i);
    
    while (index.length) {
        let max = Math.max(...p);
        if (max === p[0]) {
            if (index[0] === l) return cnt;
            p.shift();
            index.shift();
            cnt++;
        } else {
            p.push(p.shift());
            index.push(index.shift());
        }
    }
}

const p = [1, 1, 9, 1, 1, 1];
const l = 0;

console.log(solution(p, l));