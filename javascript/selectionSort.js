// 从第一个数开始，与其后的每个元素对比，拿到最小数，与起始位置互换
// 时间复杂度为O(n^2)
function selectionSort(arr) {

    let minIndex = 0
    let len = arr.length
    if (!Array.isArray(arr)) {
        throw Error('type error')
        return
    }
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