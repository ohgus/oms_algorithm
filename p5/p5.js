let clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

function solution(clothes) {
    var answer = 1;
    let clothesCategory = {};

    clothes.forEach(e => {
        const [name , category] = e; // 옷을 각각의 종류와 이름으로 구분한다.
        
        if (clothesCategory.hasOwnProperty(category)){ // 이미 오브젝트에 같은 종류가 있다면 + 1;
            clothesCategory[category]++;
        } else {
            clothesCategory[category] = 1; // 아직 없는 종류라면 종류에 한가지 옷이 있음을 명시.
        }
        
    });
    for (const key in clothesCategory){
        answer *= (clothesCategory[key] + 1);
    }
    return answer - 1; // 옷을 아예 안입는 경우는 없으므로 -1.
}
solution(clothes);