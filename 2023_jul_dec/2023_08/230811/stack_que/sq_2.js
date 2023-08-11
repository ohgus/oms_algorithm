function sol(p, s) {
    var answer = [];
    let day = 1;
    while (p.length) {
        let cur = p.slice();
        let arr = [];
        for (let i = 0; i < cur.length; i++) {
            cur[i] += s[i] * day;
        }
        if (cur[0] >= 100) {
            for (let i = 0; i < cur.length; i++) {
                if (cur[i] >= 100) {
                    arr.push(cur[i]);
                    p.shift();
                    s.shift();
                } else break;
            }
        }
        if (arr.length > 0) answer.push(arr.length);
        day += 1;
    }
    
    return answer;
}

const p = [95, 90, 99, 99, 80, 99];
const s = [1, 1, 1, 1, 1, 1];

console.log(sol(p, s));