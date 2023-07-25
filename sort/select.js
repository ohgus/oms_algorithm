function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let arr = Array.from({ length: 30000}, () => Math.floor(Math.random() * 1000));
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

console.log(`선택 정렬 소요시간: ${endTime - startTime} ms`);