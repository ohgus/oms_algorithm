const n = 7;
const wires = [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]];

function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const arr = Array.from(Array(n + 1),() => []);
    
    wires.map((e) => { // 각 노드들의 인접한 노드를 저장한다.
        let [a,b] = e;
        arr[a].push(b);
        arr[b].push(a);
    })
    
    function st (r,d){ // 현재 노드와 삭제할 노드
        let cnt = 0;
        let queue = [r];
        let visit = [];
        visit[r] = true;
        while(queue.length){
            let idx = queue.pop();
            arr[idx].forEach((e) => { // 현재 노드의 인접한 노드들을 방문
                if(e !== d && visit[e] !== true){
                    visit[e] = true; // 방문처리
                    queue.push(e); // 방문한 노드의 인접한 노드들을 방문하기 위해 큐에 담아준다.
                }
            })
            cnt++; // 큐에서 처리가 끝난 노드가 나올 때 마다 수를 세어준다.
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