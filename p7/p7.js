let n = 5;
let l = [2,4];
let r = [1,3,5];
let answer = 0;
let arr = new Array(n).fill(1);

l.forEach(e => {
    arr[e - 1]--; // 체육복을 잃어버린 학생이라면 - 1
})
r.forEach(e => {
    arr[e - 1]++; // 체육복을 두개 가지고 있다면 + 1
})

for (let i = 0; i < n; i++){
    if (arr[i] === 1) answer++; 
    else if (arr[i] === 2){
        answer++;
        if (i > 0 && arr[i - 1] === 0) answer++; // 체유복을 두개 가지고 있는데 앞사람이 없다면 나누어 준다.
        else if (i < n-1 && arr[i + 1] === 0) arr[i + 1]++; // 체육복을 두개 가지고 있는데 뒷사람이 없다면 나누어 준다.
    }
}
console.log(answer);
