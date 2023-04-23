const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

function solution(priorities, location) {
    var answer = 0;
    const positionNum = [];
    let max = Math.max(...priorities);
    for (let i = 0; i < priorities.length; i++){
       positionNum.push(i);
    }
    while(priorities.length !== 0){ 
        if (priorities[0] !== max){ // 만약 배열의 첫번째 값이 max와 같지 않다면
            priorities.push(priorities.shift()); // 배열의 첫번째 값을 뒤로 보낸다.
            positionNum.push(positionNum.shift()); // 배열의 순서를 저장한 배열의 첫번째도 뒤로 보낸다.
        }
        else { // 배열의 첫번째가 max와 같거나 크다면
            answer += 1; 
            priorities.shift();
            if (positionNum.shift() === location){
                return answer;
            }
            max = Math.max(...priorities);
        }
        
    }
}

solution(priorities, location);