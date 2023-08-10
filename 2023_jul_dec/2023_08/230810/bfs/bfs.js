class Queue {
    constructor() {
      this.items = {};
      this.headIndex = 0;
      this.tailIndex = 0;
  }
  enqueue(item) {
      this.items[this.tailIndex] = item;
      this.tailIndex++;
    }
  dequeue() {
    const item = this.items[this.headIndex]; 
    delete this.items[this.headIndex]; 
    this.headIndex++;
    return item;
    }
  peek() {
    return this.items[this.headIndex]; 
    }
    getLength() {
      return this.tailIndex - this.headIndex;
    } 
}
// BFS 메서드 정의
function bfs(graph, start, visited) { 
    queue = new Queue(); 
    queue.enqueue(start);
    // 현재 노드를 방문 처리 
    visited[start] = true;
    // 큐가 빌 때까지 반복
    while (queue.getLength() != 0) {
      // 큐에서 하나의 원소를 뽑아 출력하기
      v = queue.dequeue();
      console.log(v);
      // 아직 방문하지 않은 인접한 원소들을 큐에 삽입 
      for (i of graph[v]) {
          if (!visited[i]) { 
              queue.enqueue(i); visited[i] = true;
            } 
      }
    } 
}