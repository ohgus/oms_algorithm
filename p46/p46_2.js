const absolutes = [4,7,12];
const signs = [true,false,true];

function solution(absolutes, signs) {
    answer = absolutes.reduce((acc,cur,i) => acc + (cur * (signs[i] ? 1 : -1)),0);
    console.log(answer);
    return answer;
}
solution(absolutes, signs);