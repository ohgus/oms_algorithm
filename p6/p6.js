let size = [[60, 50], [30, 70], [60, 30], [80, 40]];


function solution(sizes) {
    var answer = 0;
    let x = []; // 가로길이 배열
    let y = []; // 세로길이 배열
    for (let i = 0; i < size.length; i++){
        if (size[i][0] < size[i][1]) { // 가로보다 세로가 길다면 서로 바꿔서 각각의 배열에 넣어준다.
            x.push(size[i][1]);
            y.push(size[i][0]);
        }
        else {
            x.push(size[i][0]);
            y.push(size[i][1]);
        }
    }
    answer += (Math.max(...x) * Math.max(...y)); // 가장 긴 가로길이와 가장 긴 세로길이의 곱을 더해준다.
    return answer;
}

