const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
    const hash = new Map();

    players.forEach((call,index) => { // 플레이어들의 인덱스를 키와 밸류로 저장한다.
        hash.set(call,index);
    })

    callings.forEach((call) => {
        const curidx = hash.get(call); // 추월한 선수의 인덱스
        const frontidx = players[curidx - 1]; // 추월당한 선수의 인덱스

        [players[curidx],players[curidx - 1]] = [players[curidx - 1],players[curidx]]; // 추월한 선수와 추월당한 선수의 순서를 바꿔준다.

        hash.set(call, hash.get(call) - 1); // 추월한 선수의 인덱스를 바꿔준다.
        hash.set(frontidx, hash.get(call) + 1); // 추월당한 선수의 인덱스를 바꿔준다.
    })
    return players;
}
solution(players,callings);