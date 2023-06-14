const nums = [1,2,7,6,4];

// 첫번째 풀이 시간초과.
// function solution(nums) {
//     let answer = 0;
//     let selected = [];
//     let visited = new Array(nums.length).fill(false);
//     function isPrime(num){
//         if(num === 2) return true;
//         for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
//             if(num % i === 0) return false;
//         }
//         return true;
//     }
//     function dfs(depth,start){
//         if(depth === 3){
//             let total = 0;
//             let result = [];
//             for(let x of selected) result.push(nums[x]);
//             for(let i of result) total += i;
//             if(isPrime(total)){
//               answer++;
//               console.log(answer,total);  
//             } 
//             else return;
//         }
//         for(let i = start; i < nums.length; i++){
//             if (visited[i]) continue;
//             selected.push(i);
//             visited[i] = true;
//             dfs(depth + 1,i + 1);
//             selected.pop();
//             visited[i] = false;
//         }
//     }
//     dfs(0,0);
//     return answer;
// }

// 두번째 풀이 통과
function solution(nums) {
    let answer = 0;
    function isPrime(num){
                if(num === 2) return true;
                for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
                    if(num % i === 0) return false;
                }
                return true;
            }
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                let total = nums[i] + nums[j] + nums[k];
                if(isPrime(total)){
                    answer++;
                }
            }
        }
    } 
    console.log(answer);
    return answer;
}
solution(nums);