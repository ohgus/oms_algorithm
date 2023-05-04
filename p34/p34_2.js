const s = "aaabbaccccabba";
function solution(s) {
    var answer = 0;
    s = s.split('');
    let idx = 1;
    let sa = 1;
    let da = 0;
    
    while(s.length){
        let now = s[0];
        if(now === s[idx]){
            sa++;
        }else {
            da++;
        }        
        if(sa !== da){
            idx++;
        }else{
            answer++;
            s.splice(0,idx+1);
            idx = 1;
            sa = 1;
            da = 0;
        }
    }
    console.log(answer);
    return answer;
}
solution(s);