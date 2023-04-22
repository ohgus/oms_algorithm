let nums = [3,4,5,6,7,8];

function solution(nums) {
    var answer = 0;
    let n = Number(nums.length);
    let arr = new Set(nums);
    if (arr.size < n / 2) {
        answer = arr.size;
    } else {
        answer = n / 2;
    }
    console.log(answer);
    return answer;
}
solution(nums);