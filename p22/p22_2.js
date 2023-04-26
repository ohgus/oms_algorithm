//다른 사람의 풀이 (리듀스와 배열 내의 맵을 이용해 더 간결한 코드가 가능했다.)
function solution(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    }
    return answer;
}
