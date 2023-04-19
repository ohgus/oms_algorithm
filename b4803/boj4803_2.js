// 무방향 그래프에서 사이클 여부 확인
function isCycle(x, prev) {
    // 현재 노드 방문 처리
    visited[x] = true;
    // 다음 노드(인접 노드)를 하나씩 확인하며 
    for (let y of graph[x]) {
    if (!visited[y]) { // 다음 노드를 아직 방문하지 않았다면 
        // 다음 노드 기준으로 사이클이라면
    if (isCycle(y, x)) return true; // 사이클 발생
    }
    // 방문한 적 있는 노드인데, 직전 노드가 아니라면(무방향 그래프)
    else if (y != prev) return true; }
      return false;
    }

const fs = require('fs');
const input = fs.readFileSync('./b4803/input4803.txt').toString().split('\n');    

let line = 0;
let testCase = 1; 
while (true) {
    let [n, m] = input[line].split(' ').map(Number);

    if (n == 0 && m == 0) break; // 노드의 개수(N)와 간선의 개수(M) 
    graph = []; // 트리 정보 입력받기
    for (let i = 1; i <= n; i++) graph[i] = [];
    for (let i = 1; i <= m; i++) {
        let [x, y] = input[line + i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    visited = new Array(n + 1).fill(false); // 방문 처리 배열 
    let cnt = 0; // 그래프 내 트리의 개수
    for (let i = 1; i <= n; i++) { // 하나씩 노드를 확인하며
        if (!visited[i]) { // 연결 요소이면서
        if (!isCycle(i, 0)) cnt++;// 사이클이 아니라면 트리이므로, 카운트하기
        } 
    }
    if (cnt == 0) console.log(`Case ${testCase}: No trees.`);
    else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`); 
    else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
    line += m + 1; // 다음 테스트 케이스로 이동
    testCase++;
}
