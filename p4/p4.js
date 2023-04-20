let s = '(()(';

function solution(s){
    var answer = true;
    let stack = [];
    for (let i = 0; i < s.length; i++){
        stack.push(s[i]);
        if (stack[stack.length - 1] === ')' && stack[stack.length - 2 === '(']){
            stack.pop();
            stack.pop();
        }
    }     
    console.log('Hello Javascript')

    return stack.length === 0 ? true : false;
}
solution (s);