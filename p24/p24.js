const s = "aukks";
const skip = "wbqd"
const index = 5;

function solution(s, skip, index) {
    var answer = '';
    const alphabet = new Set ('abcdefghijklmnopqrstuvwxyz');
    [...skip].forEach(e => alphabet.delete(e)); // 전체 알파벳 중에 건널뛸 알파벳은 제거한다.
    const alpharr = [...alphabet]; // 제거가 완료된 알파벳을 배열로 만들어준다.
    for(let x of s){ // 변환해줄 단어의 인덱스를 알파벳 배열에서 찾아 더해주고 정답에 담아준다.
        const idx = alpharr.indexOf(x) + index;
        answer += alpharr[idx % alpharr.length];
    }
    console.log(answer);
    return answer;
}
solution(s, skip, index);