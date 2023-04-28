const t = "3141592";
const p = "271";

function solution (t,p){
    let answer = 0;
    for(let i = 0; i <= t.length - p.length; i++){
        let st = t.slice(i,i + p.length);
        console.log(st);
        if(Number(st) <= Number(p)) answer++;
    }
    console.log(answer);
    return answer;
}
solution (t,p);