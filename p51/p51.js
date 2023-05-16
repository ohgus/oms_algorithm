const n = 5;
const arr1 =[9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
const answer = [];

for (let i = 0; i < n; i++) {
    const strLine = (arr1[i] | arr2[i]).toString(2); // 비트연산자 활용
    console.log(strLine);
    const arrLine = strLine.split(""); // 각각의 원소를 나누어 준다.
    console.log(arrLine);
    while (arrLine.length < n) { // 만약 2진수의 길이가 n보다 짧다면
        arrLine.unshift("0")
    }
    const decLine = (arrLine.map(i => i === "1" ? "#" : " ")).join(""); // 배열의 원소를 확인하면 1 이라면 #으로 변환 아니라면 공백으로 변환한다.
    answer.push(decLine);
}
return answer;
}
solution(n, arr1, arr2);