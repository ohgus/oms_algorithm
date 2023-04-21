let numbers = [1, 1, 1, 1, 1];
let target = 3;

function solution(numbers, target) {
    var answer = 0;

    function dfs (num , sum ){
        if (num === numbers.length){ // 마지막 인덱스 까지 확인했다면
            if (sum === target){ // 합이 타겟과 같다면
                answer += 1;
            }
            return;
        }
        dfs(num + 1, sum + numbers[num]);
        dfs(num + 1, sum - numbers[num]);
    }
    dfs(0,0);
    return answer;
}
solution(numbers, target);