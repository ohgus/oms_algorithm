const numbers = [2,1,3,4,1];

function solution(numbers) {
    var answer = [];
    const selected = [];
    let visited = new Array(numbers.length).fill(false);
    function dfs (arr){
        if(selected.length === 2){
            let result = [];
            for(let x of selected) result.push(arr[x]);
            if(!answer.includes(result[0] + result[1])){
                answer.push(result[0] + result[1]);
            }
        }
        for(let i = 0; i < numbers.length; i++){
            if(visited[i]) continue;
            selected.push(i);
            visited[i] = true;
            dfs(arr);
            selected.pop();
            visited[i] = false;
        }
    }
    dfs(numbers);
    answer.sort((a,b) => a - b);
    console.log(answer);
    return answer;
}
solution(numbers);
// 테스트케이스 6,7,8,9 시간초과