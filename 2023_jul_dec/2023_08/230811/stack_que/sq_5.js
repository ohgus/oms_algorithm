function solution(bl, w, tw) {
    let answer = 0;
    const b = new Array(bl).fill(0);
    
    while (b.length) {
        let cur = b.reduce((a, b) => a + b, 0);
        if (tw.length > 0) {
            if ((cur + tw[0]) - b[0] <= w) {
                b.push(tw.shift());
                b.shift();
                answer++;
            } else {
                b.push(0);
                b.shift();
                answer++;
            }
        } else if (tw.length < 1) {
            b.shift();
            answer++;
        }
    }
    return answer;
}

const bl = 2;
const w = 10;
const tw = [7,4,5,6];

console.log(solution(bl, w, tw));