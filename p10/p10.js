let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
    participant.sort(); // 정렬
    completion.sort(); // 정렬
    for (let i = 0; i < participant.length; i++){
        if (participant[i] !== completion[i]) {
            return participant[i]; // 만약 참가자 목록 인덱스와 완주자 목록 인덱스가 다르다면 그 값을 리턴한다. 
        } 
    }
    answer = participant;
    console.log(answer);
    return participant;
}

solution(participant, completion);