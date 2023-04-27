const bridge_length = 2;
const weight = 10;
const truck_weights = [7,4,5,6];

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = new Array(bridge_length).fill(0); // 다리 위에 올라가 있는 트럭을 보기 위한 일종의 큐
    let ws = 0; // 다리 위에 있는 트럭들의 무게

    ws += truck_weights[0];
    bridge.push(truck_weights.shift());
    bridge.shift();
    answer++;

    while(ws > 0){ // 트럭이 다리위에 있는 동안 반복
        answer++; // 1초씩 증가 시킨다.
        ws -= bridge.shift(); // 무게의 합에서 가장 앞에 있는 트럭을 빼준다.
        if(ws + truck_weights[0] <= weight && truck_weights.length > 0){ // 아직 대기중인 트럭이 있고 무게의 한계보다 낮거나 같다면
            ws += truck_weights[0]; // 다리위에 트럭이 올라가므로 무게를 더해준다.
            bridge.push(truck_weights.shift()); // 대기중인 트럭을 다리로 보내준다.
        }
        else {
            bridge.push(0);
        }
    }
    console.log(answer);
    return answer;
}
solution(bridge_length, weight, truck_weights);