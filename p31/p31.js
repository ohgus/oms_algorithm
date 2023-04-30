const food = [1,3,4,6];

function solution(food) {
    var answer = [];
    const foods = [];
    food.forEach((e) => {
        foods.push(parseInt(e/2));
    })
    const fidx = [];
    foods.forEach((e,index)=> {
        for(let i = 1; i <= e; i++){
            if(e >= 1) fidx.push(index);    
        }        
    })
    answer.push(...fidx,0,...fidx.reverse())
    console.log(answer.join(''));
    return answer.join('');
}
solution(food);