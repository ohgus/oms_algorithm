const k = 80;
const dungeons = [[80,20],[50,40],[30,10]];

function solution(k, dungeons) {
    const d = dungeons;
    const result = [];
    while(d.length > 0){
        if(d[0][0] <= k){
            k -= d[0][1];
            result.push(d.shift());
        }else {
            k += result[result.length - 1][1];
            d.push(result.pop());
        }
    }
    console.log(result.length);
    return result.length;
}
solution(k, dungeons);

// 테스트 케이스 4번 이외 모두 시간초과.