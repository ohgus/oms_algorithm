const n = 10;

function solution(n) {
    for(let i = 0; i < n; i++){
        if(n % i === 1){
            console.log(i);
            return i;
            }
    }
}
solution(n);