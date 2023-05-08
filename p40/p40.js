function solution(X, Y) {
    var answer = '';
    X = X.split('').map(Number).sort((a,b)=> b-a);
    Y = Y.split('').map(Number).sort((a,b)=> b-a);
    console.log(X,Y);
    for(let i = 0; i < X.length; i++){
        for(let j = 0; j < Y.length; j++){
            if(X[i]===Y[j]){
                answer += String(Y[j]);
                Y.splice(j,1);
                console.log(Y);
                continue;
            }
        }
    }
    if(answer === '') return '-1';
    else if(answer.split('').map(Number)[0]===0) return '0';
    
    return answer;
}
// 시간초과 및 숫자의 크기가 너무 커서 실패하는 경우.