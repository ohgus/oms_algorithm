const s = "one4seveneight";

function solution(s) {
    var answer = s;
    const na = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    for(let i = 0; i < na.length; i++){
        let arr = answer.split(na[i]); // 현재 영단어 기준으로 분리
        console.log(arr);
        answer = arr.join(i); // 현재 영단어의 인덱스를 넣어주소 합친다.
        console.log(answer);
    }
    console.log(`answer : ${Number(answer)}`);
    return Number(answer);
}
solution(s);