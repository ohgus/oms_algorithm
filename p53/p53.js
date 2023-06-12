//테케 1번
const d = [1,3,2,5,4];
const budget = 9;
//테케 2번
// const d = [2,2,3,3];
// const budget = 10;

// 테스트케이스 2 번 undifined

// function solution(d, budget) {
//     var answer = 0;
//     d.sort((a,b)=> a - b);
//     console.log(d);
//     let sum = 0;

//     for(let i = 0; i < d.length; i++){
//         if(sum + d[i] <= budget){
//             sum += d[i];
//             answer++
//             console.log(answer);
//         } else {
//             return answer;
//         }
//     }
// }

// 통과

function solution(d, budget) {
    var answer = 0;
    d.sort((a,b) => a - b);
    for(let i = 0; i < d.length; i++){
        if(budget - d[i] >= 0){
            budget -= d[i];
            answer++;
            console.log(answer);
        } 
    }
    return answer;
}

solution(d, budget);