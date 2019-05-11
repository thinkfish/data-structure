function selectionSort(arr) {

    let minIndex = 0
    let len = arr.length
    if (!arr.length) {
        retrn
    } else {
        for (let i = 0; i < len - 1; i++) {
            minIndex = i
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

// test
let arr = [3, 5, 1, 2, 8, 6, 9]
console.log(selectionSort(arr))