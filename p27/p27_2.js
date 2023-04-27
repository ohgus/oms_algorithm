const n = 7;
const wires = [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]];

function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const arr = Array.from(Array(n + 1),() => []);
    
    wires.map((e) => {
        let [a,b] = e;
        arr[a].push(b);
        arr[b].push(a);
    })
    
    function st (r,d){
        let cnt = 0;
        let queue = [r];
        let visit = [];
        visit[r] = true;
        while(queue.length){
            let idx = queue.pop();
            arr[idx].forEach((e) => {
                if(e !== d && visit[e] !== true){
                    visit[e] = true;
                    queue.push(e);
                }
            })
            cnt++;
        }
        return cnt;
    }
    wires.forEach((e) => {
        let [a,b] = e;
        answer = Math.min(answer,Math.abs(st(a,b) - st(b,a)));
    })
    console.log(answer);
    return answer;
}
solution(n, wires);