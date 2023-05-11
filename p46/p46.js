const absolutes = [4,7,12];
const signs = [true,false,true];

function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < absolutes.length; i ++){
        if(signs[i]) answer += absolutes[i];
        else answer -= absolutes[i]
    }
    console.log(answer);
    return answer;
}
solution(absolutes, signs);