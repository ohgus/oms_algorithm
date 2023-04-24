const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];


function solution(players, callings) {
    const hash = new Map();

    players.forEach((call,index) => {
        hash.set(call,index);
    })
    
    callings.forEach((call) => {
        const curidx = hash.get(call);
        const front = players[curidx - 1];

        [players[curidx],players[curidx - 1]] = [players[curidx - 1],players[curidx]];

        hash.set(call,hash.get(call) - 1);
        hash.set(front,hash.get(call) + 1);
    })
    console.log(players);
    return players;
}
solution(players,callings);