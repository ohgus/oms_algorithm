const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];
function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let c1 = cards1; // 본 배열의 값을 바꾸지 않고 사용할 임시 배열
    let c2 = cards2;
    goal.forEach((e) => { // goal 의 인덱스를 하나씩 확인하며 각 카드뭉치에 첫번째가 같은게 있는지 확인한다.
        if(e === c1[0]) { // 1번 카드뭉치에 있는지 확인
            c1.shift();
        }
        else if(e === c2[0]){ // 2번 카드뭉치에 있는지 확인
            c2.shift();
        }
        else { // 1번,2번 모두 없을 경우
            answer = "No";
        }
    }) 
    return answer;
}
solution(cards1, cards2, goal);