const X = "100";
const Y = "2345";

function solution(X, Y) {
    var answer = [];
    // X와 Y에 나온 숫자들의 등장 횟수를 세기위한 배열을 생성
    const Xarr = new Array(10).fill(0);
    const Yarr = new Array(10).fill(0);
    // 각각의 배열에 해당 숫자가 등장한 횟수를 카운팅
    X.split('').forEach(e => Xarr[e]++);
    Y.split('').forEach(e => Yarr[e]++);
    console.log(Xarr,Yarr);
    // 두배열이 모두 같은 숫자를 가지고 있으면 적은 횟수를 가진 배열에 등장한 수만큼 정답에 추가
    for(let i = 0; i < 10; i++){
        let min = Math.min(Xarr[i],Yarr[i]);
        for(let j = 0; j < min; j++){
            answer.push(i);
            console.log(answer);
        }
    }
   
    answer.sort((a,b)=> b-a);  // 중복된 숫자들을 내림차순으로 정렬
    if(answer[0]===0)answer = [0]; // 중복된 수가 0만 존재할 때
    else if(answer.length === 0) answer = [-1]; // 중복된 수가 없을 때
    console.log(`answer: ${String(answer.join(''))}`);
    return String(answer.join('')); // 수를 문자열로 변환하고 붙여서 리턴.
}
solution(X, Y);