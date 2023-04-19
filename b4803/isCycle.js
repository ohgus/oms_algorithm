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