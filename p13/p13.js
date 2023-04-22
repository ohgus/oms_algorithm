let arr = [1,1,3,3,0,1,1];

function solution(arr){
    var answer = [];
    for (let i = 0; i < arr.length; i++){
        if (answer.length === 0) answer.push(arr[i]);
        else if (arr[i - 1] === arr[i]) continue;
        else answer.push(arr[i]);
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    console.log(answer);
    return answer;
}

solution(arr);