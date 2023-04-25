const n = 5;
const m = 4;
const section = [1,3];

function solution(n, m, section) {
    var answer = 0;
    let last = 0;
    section.forEach((e) => {
        if (e > last){
            answer++;
            last = e + m - 1;
        }
    })
    console.log(answer);
    return answer;
}
solution(n, m, section);