function solution(phone_book) {
    const hash = {};
    
    for (let p of phone_book) {
        hash[p] = true;
    }
    for (let p of phone_book) {
        for (let i = 1; i < p.length; i++) {
            let check = p.slice(0, i);
            if (hash[check]) return false;
        }
    }
    return true;
}

const phone_book = ["119", "97674223", "1195524421"];

console.log(solution(phone_book));