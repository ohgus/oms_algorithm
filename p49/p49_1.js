const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3]	;

function solution(N, stages) {
    var answer = [];
    const fail = [];
    let cp = stages.length;

    stages.forEach((e) => {
        if(e <= N){
            if(fail[e] === undefined){
                fail[e] = [e,1];
            } else{
                fail[e][1]++;
            }
        }
    })

    for(let i = 1; i <= N; i++){
        if(fail[i] === undefined){
            fail[i] = [i,0];
        } else{
            const np = fail[i][1];
            fail[i][1] = np / cp;
            cp -= np;
        }
    }
    answer = fail.sort((a,b) => b[1] - a[1]).slice(0,N).map((e) => e[0]);
    console.log(answer);
    return answer;
}
solution(N, stages);