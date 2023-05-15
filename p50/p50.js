const n = 45;

function solution(n) {
    let t = n.toString(3);
    let r = t.split('').reverse();
    console.log(parseInt(r.join(''),3));
    return parseInt(r.join(''),3);
}
solution(n);