let numbers = "011";
function isPrime (num) {
    if (num === 2) return true;
    if (num < 2) return false;
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false;
    }
    return true;
}

function solution (numbers) {
    const nums = numbers.split('');
    const answer = new Set();
    
    function per (arr,select) {        
        if(arr.length) { // 배열에 길이가 있다면
            for (let i = 0; i < arr.length; i++){
                const temp = [...arr];
                temp.splice(i,1); // 원소를 하나씩 제거하며 조건에 맞는지 확인한다. 
                if (isPrime(parseInt(select + arr[i]))){ // 수식의 값이 소수가 맞다면
                    answer.add(parseInt(select + arr[i]));
                }
                per (temp,select + arr[i]); // temp 를 arr로 호출하고 selected + 현재 arr[i]
            }
        }
    }
    per(nums,'');
    console.log(answer);
    return answer.size; // 객체의 크기는 size
}
solution (numbers);