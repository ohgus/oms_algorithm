const keymap = ["AA"];
const targets = ["B"];

function solution(keymap, targets) {
    var answer = [];
    const map = new Map();

    for(let i of keymap){
        for(let j = 0; j < i.length; j++){
            if(!map.has(i[j]) || j + 1 < map.get(i[j])) map.set(i[j],j + 1); // keymap의 알파벳을 하나씩 확인하며 map에 존재하지 않는 경우와 현재 map의 저장되어 있는 해당 알파벳의 값이 더 큰 경우. 
        }
    }
    for(let x of targets){
        let cnt = 0;
        for(let i = 0; i < x.length; i++){
            cnt += map.get(x[i]);
        }
        answer.push(cnt || -1); // 객체에 값이 없다면 undifined가 저장되는데 만약 cnt의 값이 숫자가 아니라 undifined가 추가되면 NaN으로 나오게 된다. cnt의 값이 falsy로 나오게 되면 -1을 푸시한다.
    }
    console.log(answer);
    return answer;
}
solution(keymap, targets);