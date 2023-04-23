const answers = [1,3,2,4,2];

function solution(answers) {
    var answer = [];

    const stu1 = [1,2,3,4,5];
    const stu2 = [2,1,2,3,2,4,2,5];
    const stu3 = [3,3,1,1,2,2,4,4,5,5];
    let result = [0,0,0];

    for (let i = 0; i < answers.length; i++){
        if(answers[i] === stu1[i%5]) result[0]++;
        if(answers[i] === stu2[i%8]) result[1]++;
        if(answers[i] === stu3[i%10]) result[2]++;
    }

    let max = Math.max(...result);
    let indexNum = 0;
    for (let i = 0; i < result.length; i++){
        if (result[i]===max){
           answer[indexNum] = i + 1;
           indexNum ++;
            }
        }
    console.log(result);
    console.log(answer);
    return answer;
}

solution(answers);