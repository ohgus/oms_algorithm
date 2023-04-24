let numbers	 = "17";
function isPrime (num){
    if (num === 2) return true;
    if (num < 2) return false;
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const nums = numbers.split('');
    const answer = new Set();

    function getPermutation (arr,selected){
        if (arr.length){
            for (let i = 0; i < arr.length; i++){
                const temp = [...arr];
                temp.splice(i,1);
                if (isPrime(parseInt(selected + arr[i]))){
                    answer.add(parseInt(selected + arr[i]));
                }
                getPermutation (temp,selected + arr[i]);
            }
        }
    }

    getPermutation (nums,'');
    return answer.size;
}
solution(numbers);