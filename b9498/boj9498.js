const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const a = parseInt(input); // input값이 하나일 때는 순서를 지정할 필요가 없음.//

    if (a >= 90 && a <= 100){
        console.log('A');
    }
    else if (a >= 80 && a <= 89){
        console.log('B');
    }
    else if (a >= 70 && a <= 79){
        console.log('C');
    }
    else if (a >= 60 && a <= 69){
        console.log('D');
    }
    else  {
        console.log('F');
    }
