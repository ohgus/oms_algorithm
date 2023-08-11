const nums = [3,3,3,2,2,4];

function s(nums) {
    let answer = 0;
    let n = nums.length;
    let arr = new Set(nums);
    if (arr.size < n / 2) answer = arr.size;
    else  answer =  n / 2;
    return answer;
}

console.log(s(nums));