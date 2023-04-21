let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

function solution(progresses, speeds) {
    var answer = [];
    let cnt = 0;
    let day = 0;
    let pro = 0;
    while(progresses[0]){
        pro = progresses[0] + (speeds[0]*day);
        console.log(`now : ${pro}`);
        if (pro >= 100){
            progresses.shift();
            speeds.shift();
            cnt++;
        }
        else {
            if (cnt > 0){
                answer.push(cnt);
                console.log(`cnt: ${cnt}`);
            } 
            day++;
            cnt = 0;
        }
    }
    answer.push(cnt);
    console.log(answer);
    return answer;
}
solution(progresses, speeds);