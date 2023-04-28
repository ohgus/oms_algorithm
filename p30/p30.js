const sequence = [1, 2, 3, 4, 5];
const k = 7;

function solution(sequence, k) {
    let [l,r] = [0,0]; // 수열의 시작인덱스 와 끝인덱스 값을 0 으로 세팅
    let sum = sequence[l]; // 수열의 합을 정수 배열의 첫번째 값으로 세팅
    let result = []; // 조건에 맞는 모든 수열을 담을 배열
    while(r < sequence.length){
        if(sum < k) { // 수열의 합이 k보다 작다면
            sum += sequence[++r]; // 수열의 합에 끝인덱스를 하나 올린값을 더해준다.
        }
        else if(sum > k) { // 수열의 합이 k보다 크다면
            sum -= sequence[l++]; // 시작점인덱스의 값을 빼주고 시작인덱스를 하나 올려준다.
        }
        else if(sum === k){ // 수열의 합이 k와 같다면
            result.push([l,r]); // 현재 수열을 배열에 담아준다.
            sum += sequence[++r]; // 조건에 맞는 다른 수열이 있는지 탐색한다.
            sum -= sequence[l++];
        }
    }
    result.sort((a,b) => (a[1] - a[0])-(b[1] - b[0])); // 조건에 맞는 수열들을 길이가 짧은 순으로 정렬한다.
    return result[0]; // 가장 길이가 짧은 수열을 리턴한다.
}
solution(sequence, k);