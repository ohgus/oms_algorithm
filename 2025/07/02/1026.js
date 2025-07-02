const fs = require('fs');
const input = fs
  .readFileSync('./2025/07/02/1026.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

function solution(n, a, b) {
  let sum = 0;

  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

console.log(solution(n, a, b));
