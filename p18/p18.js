const brown = 14;
const yellow = 4;
function solution(brown, yellow) {
    let total = brown + yellow;
    for (let i = 1; i <= brown; i++){
        for (let j = 1; j <= i; j++){
            if(j === total / i && total % j === 0 && (i -2)*(j-2) === yellow){
                console.log(i,j);
                return [i , j];
            }
        }
    }  
}
solution(brown, yellow);