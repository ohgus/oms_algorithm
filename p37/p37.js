const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

function solution(babbling) {
    var answer = 0;
    const bab = ['aya','ye','woo','ma']
    
    for(let i = 0; i < babbling.length; i++){
        let word = babbling[i];
        console.log(`word: ${word}`);
        for(let j = 0; j < bab.length; j++){
            if(word.includes(bab[j].repeat(2))){
                break;
            }
            word = word.split(bab[j]).join(' ');
            console.log(`now word: ${word}.`);
        }
        if(word.split(' ').join('').length === 0){
            answer += 1;
            console.log(answer)
        }
    }
    return answer;
}
solution(babbling);