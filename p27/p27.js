const n = 7;
const wires = [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]];

function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;
    const arr = Array.from(Array(n + 1),()=>[]);
    wires.map((e) => {
        let [a,b] = e;
        arr[a].push(b);
        arr[b].push(a);
    })
    function searchT (root,d){
        let cnt = 0;
        let visit = [];
        let queue = [root];
        console.log(`queue: ${queue}`);
        visit[root] = true;
        while(queue.length){
            let idx = queue.pop();
            arr[idx].forEach((e)=>{
                if(e !== d && visit[e] !== true){
                    console.log("do");
                    visit[e] = true;
                    queue.push(e);
                    console.log(`now que: ${queue}`);
                }
            })
            cnt++;
            console.log(`cnt : ${cnt}`);
        }
        return cnt;
    }
    wires.forEach(e => {
        let [a,b] = e;
        answer = Math.min(answer, Math.abs(searchT(a,b) - searchT(b,a)))
        console.log(`answer : ${answer}`);
    })
    return answer;
}
solution(n, wires);