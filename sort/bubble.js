function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let arr = Array.from({ length: 30000}, () => Math.floor(Math.random() * 1000));
startTime = new Date().getTime();
bubbleSort(arr);
endTime = new Date().getTime();
console.log(`버블 정렬 소요 시간: ${endTime - startTime}ms`);