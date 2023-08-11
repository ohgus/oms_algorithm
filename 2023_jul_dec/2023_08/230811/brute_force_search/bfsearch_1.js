function solution(s) {
    var answer = 0;
    let x = [];
    let y = [];
    for (let i = 0; i < s.length; i++) {
        x.push(Math.max(s[i][0], s[i][1]));
        y.push(Math.min(s[i][0], s[i][1]));
    }
    return Math.max(...x) * Math.max(...y);
}

const s = [[60, 50], [30, 70], [60, 30], [80, 40]];

console.log(solution(s));