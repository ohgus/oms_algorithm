const s = "aaabbaccccabba";
function solution(s) {
    var answer = 0;
    s = s.split('');
    let idx = 1;
    let cnt = 1;
    
    while(s.length){
        let now = s[0];
        if(now === s[idx]){
            cnt++;
        }else {
            cnt--;
        }        
        if(cnt !== 0){
            idx++;
        }else{
            answer++;
            s.splice(0,idx+1);
            idx = 1;
            cnt = 1;
        }
    }
    return answer;
}