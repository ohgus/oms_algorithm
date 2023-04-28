const s = "abcda";

function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        console.log(v,i);
        let result = hash[v] !== undefined ? i - hash[v] : -1; // 처음 등장하는 알파벳이면 -1 을 리턴
        console.log(hash[v]);
        hash[v] = i; // 해당 알파벳의 인덱스를 저장해서 다음에 또 등장하면 뒤에 나온 같은 알파벳의 인덱스에서 마지막으로 나왔던 알파벳의 인덱스를 뺴줌으로 둘의 차이를 알 수 있다.
        console.log(`hash[v]: ${hash[v]}`);
        console.log(`result: ${result}`);
        return result;
    });
}
solution(s);