function solution(arr) {
    var answer = [];
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === answer[answer.length - 1]) continue;
        else answer.push(arr[i]);
    }
    return answer;
}

const arr = [1,1,3,3,0,1,1];

console.log(solution(arr));