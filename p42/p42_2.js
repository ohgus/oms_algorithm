const numbers = [1,2,3,4,6,7,8,0];

function solution(numbers) {
    console.log(45 - numbers.reduce((acc,cur) => acc + cur,0));
   return 45 - numbers.reduce((acc,cur) => acc + cur,0);
}
solution(numbers);