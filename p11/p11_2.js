let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];

function solution(progresses, speeds) {
    var answer = [0];
    let days = progresses.map((progress,index) => Math.ceil((100 - progress) / speeds[index])); // 작업물 별로 걸리는 날을 계산
    let maxdays = days[0]; // 작업들은 순서별로 되어야 하기 때문에 첫 작업물을 소요일을 맥스데이로 설정

    for (let i = 0 , j = 0; i < days.length; i++){
        if (days[i] <= maxdays){
            answer[j] += 1;
        }
        else {
            maxdays = days[i];
            answer[++j] = 1;
        }
    }
    console.log(answer);
    return answer;
}
solution(progresses, speeds);