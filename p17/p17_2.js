const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];


function solution(name, yearning, photo) {
    var answer = [];
    const hash = new Map();

    name.forEach((e,index) => {
        hash.set(e,yearning[index]); // 사람의 이름과 추억점수를 각각 키와 밸류로 저장
    })

    for (let i = 0; i < photo.length; i++){
        let score = 0;
        for (let j = 0; j < photo[i].length; j++){ 
            let es = hash.get(photo[i][j]); // 사진에 등장하는 사람의 이름이 객체에 있으면 그사람의 밸류값을 가져온다.
            if (!es) continue; // 사진속 인물이 객체에 존재하지 않는다면 넘어간다.
            score += es;
        }
        answer.push(score);
    }
    console.log(answer);
    return answer;
}
solution(name, yearning, photo);