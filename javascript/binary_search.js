function binary_search(arr, guess) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (guess === arr[mid]) {
            return mid
        }
        if (guess > arr[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return arr[mid]


}