let maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];

function solution(maps) {
    let mapy = maps.length; // 맵의 세로길이
    let mapx = maps[0].length; // 맵의 가로길이
    let enemyy = mapy - 1; // 적의 y좌표
    let enemyx = mapx - 1; // 적의 x좌표
    let movey = [0 , 0 , -1 , 1]; // y 축으로 움직이는 방향
    let movex = [-1 , 1 , 0 , 0]; // x 축으로 움직이는 방향

    let que = [];
    que.push([0 , 0 , 1]);

    while(que.length){
        let [cury , curx , move] = que.shift(); // 플레이어의 위치와 움직인 칸 수
        if (cury === enemyy && curx === enemyx) {
            return move; //적을 찾았다면 움직인 칸수를 리턴한다.
        }
        for (let i = 0; i < 4; i++){ // 플레이어의 위치에서 상 하 좌 우 로 움직일 수 있는 칸이 있는지 확인한다.
            let nowy = cury + movey[i];
            let nowx = curx + movex[i];
            if (nowy >= 0 && nowy < mapy && nowx >= 0 && nowx < mapx && maps[nowy][nowx] === 1){
                que.push([nowy , nowx , move + 1]); // 현재 위치와 움직인 칸 수를 큐에 담아준다.
                maps[nowy][nowx] = 0; // 칸을 움직였다면 방문처리 한다.
            }
        }
    }
    return -1; // 적의 위치에 접근할 수 없다면 -1 을 리턴한다.
}
solution(maps);
