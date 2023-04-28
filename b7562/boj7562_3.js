class Queue{
    constructor(){
        this.items = {};
        this.hi = 0;
        this.ti = 0;
    }
    enque(item){
        this.items[this.ti] = item;
        this.ti ++;
    }
    deque(){
        let item = this.items[this.hi];
        delete this.items[this.hi];
        this.hi ++;
        return item;
    }
    peek(){
        return this.items[this.hi];
    }
    getLen(){
        return this.ti - this.hi;
    }
}
const fs= require('fs');
const input = fs.readFileSync('./b7562/input7562.txt').toString().split('\n');

dx = [-2,-2,-1,-1,1,1,2,2]; // 체스말이 이동하는 방향
dy = [-1,1,-2,2,-2,2,-1,1];
let tc = Number(input[0]); 
let line = 1;
while(tc--){
    let l = Number(input[line]); // 체스판의 가로세로 크기
    let [x,y] = input[line+1].split(' ').map(Number); // 출발좌표
    let [tx,ty] = input[line+2].split(' ').map(Number); // 타겟좌표
    const visited = []; // 방문처리 배열
    for(let i = 0; i < l; i++) visited.push(new Array(l).fill(0)); // 방문처리 배열을 2차원 배열로 
    que = new Queue; // bfs호출
    que.enque([x,y]);
    visited[x][y] = 1; // 출발위치 방문처리
    while(que.getLen() !== 0){
        let cur = que.deque();
        x = cur[0];
        y = cur[1];
        for(let i = 0; i < 8; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx < 0 || nx >= l || ny < 0 || ny >= l) continue; // 체스판을 벗어난다면
            if(visited[nx][ny] === 0){
                visited[nx][ny] = visited[x][y] + 1;
                que.enque([nx,ny]);
            }
        }
    }
    line += 3;
    console.log(visited[tx][ty] - 1);
}