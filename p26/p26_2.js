const k = 80;
const dungeons = [[80,20],[50,40],[30,10]];

function solution(k, dungeons) {
    var answer = -1;
    const visited = new Array(dungeons.length).fill(false); // 각 던전의 방문여부
    function dfs (k,depth){ // 현재 스태미너와 방문한 던전의 수
        for(let i = 0; i < dungeons.length; i++){ // 총 던전의 수 만큼 반복
            if(!visited[i] && dungeons[i][0] <= k){ // 아직 방문하지 않은 던전이면서 현재 스태미너가 던전의 입장가능한 스태미너라면
                visited[i] = true; // 던전을 방문처리
                dfs(k - dungeons[i][1],depth + 1); // 재귀함수 호출 , 스태미너를 방문한 던전의 소요 스태미터 만큼 빼준다.
                visited[i] = false;
            }
            answer = Math.max(answer,depth); // 방문가능한 최대 값으로 바꿔준다.
        }
    }
    dfs(k,0);
    console.log(answer);
    return answer;
}
solution(k, dungeons);
// dfs 를 활용한 풀이 통과