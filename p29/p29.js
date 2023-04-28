const s = "abcda";

function solution(s){
    let answer = [];
    for(let i = 0; i < s.length; i++){
        if(i === 0 || s.lastIndexOf(s[i],i - 1) < 0){ // 첫 문자이거나 , 처음 등장하는 알파벳 이라면. 
            answer.push(-1);
        }else if(s.lastIndexOf(s[i],i - 1) === 0){ // 처음 등장하는 문자가 아닌데 0 이 나온다면 처음 등장한 알파벳과 동일한 알파벳 그러므로 현재 인덱스가 첫 인덱스와의 거리가 된다.
            answer.push(i);
        }else { // 만약 이전에 등장한 알파벳 이라면
            answer.push(s.lastIndexOf(s[i],i) - s.lastIndexOf(s[i],i - 1)); // 현재 인덱스 - 이전까지 나온 마지막 인덱스.
        }
    }
    console.log(answer);
    return answer;
}
solution(s);