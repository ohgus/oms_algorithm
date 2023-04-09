const fs = require('fs');
const input = fs.readFileSync('./b11047/input11047.txt').toString().split('\n');

let [n,k] = input[0].split(' ').map(Number);

let nums = [];
for(j = 1; j <= n; j++){
    nums.push(Number(input[j]));
}

nums.sort(function(a,b){return b -a});

let count = 0;
for(i = 0; i < nums.length; i++){
    if(k > nums[i]){
        count += parseInt(k / nums[i]);
        k %= nums[i];
    }
}
console.log(count);

// 처음 시도했던 방법 오답. 이유는 n,k를 하나의 배열속으로 같이 선언하면 안된다. 