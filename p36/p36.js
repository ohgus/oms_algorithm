const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
    var answer = 0;
    let index = 0;
    let s = ingredient;
    while(s.length){
        if(s[index] === 1 && s[index+1] === 2 && s[index+2] === 3 && s[index+3] === 1){
            s.splice(index,4);
            answer++;
            if(index !== 0){
                index = index - 3;
            }
        }else {
            if(index > s.length - 3){
                break;
            }
            index ++;
        }
    }
    return answer;
}