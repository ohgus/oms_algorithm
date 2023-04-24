const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

function solution(name, yearning, photo) {
    var answer = [];
    const hash = new Map();

    name.forEach((e,index) => {
        hash.set(e,yearning[index]);
    })
    console.log(hash);

    for (let i = 0; i < photo.length; i++){
        let count = 0;
        for (let j = 0; j < photo[i].length; j++){
            let score = hash.get(photo[i][j]);
            if (!score) continue;
            console.log(`score: ${score}`);
            count += score;
        }
        console.log(`count: ${count}`);
        answer.push(count);
    }
    console.log(answer);
    return answer;
}

solution(name, yearning, photo);