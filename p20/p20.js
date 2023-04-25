const park = ["OSO","OOO","OXO","OOO"];
const routes = ["E 2","S 3","W 1"];

function solution(park, routes) {
    const parkY = park.length; // 공원의 세로길이
    const parkX = park[0].length; // 공원의 가로길이
    let nowY = 0; // 출발위치의 y좌표
    let nowX = 0; // 출발위치의 x좌표
    for (let i = 0; i < parkY; i++){ // 출발위치의 좌표를 구한다.
        for (let j = 0; j < parkX; j++){
            if (park[i][j] === 'S') nowY += i , nowX += j;
        }
    }
    routes.forEach((direction) => {
        const [d,m] = direction.split(' '); // 이동할 루트
        
        let tempy = nowY; // 값을 더하고 빼줄 임시 좌표
        let tempx = nowX;
        let canMove = true; // 이동이 가능한 루트인지 확인한다.

        for (let i = 0; i < Number(m); i++){ // 아래 조건들을 확인하면서 이동이 가능한지 확인한다.
            if (d === 'E') tempx++;
            else if (d === 'W') tempx--;
            else if (d === 'N') tempy--;
            else if (d === 'S') tempy++;

            if (tempy < 0 || tempy >= parkY || tempx < 0 || tempx >= parkX || park[tempy][tempx] === 'X'){
                canMove = false;
                break; // 이동이 불가능하면 반복문을 빠져나온다.
            }
        }
        if (canMove){ // 이동이 가능한 위치면 실제 좌표값에 이동좌표값을 넣어준다.
            nowY = tempy;
            nowX = tempx;
        }
    })
    console.log ([nowY,nowX]);
    return [nowY,nowX];
}
solution(park, routes);
