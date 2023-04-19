let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    var answer = [];
    let arr1 = [];
   for (let y = 0; y < commands.length; y++){
        let [i,j,k] = commands[y];
        arr1 = [];
        for (let x = i-1; x < j; x++){
            arr1.push(array[x]);
        }
        arr1.sort((a,b) => a - b);
        answer.push(arr1[k - 1]);
   }
    
    return answer;
}
solution(array, commands);
console.log(solution(array, commands));

