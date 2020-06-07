// 插入排序
function insertSort(arr){
    // 判断参数的有效性
    if(!Array.isArray(arr)){
        return
    }
    //缓存数组长度
    const len = arr.length
    let temp
    for(let i = 1; i< len; i++){
        let j = i
        temp = arr[i]
        while(j>0 && arr[j-1] > temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    return arr
}

// test
let arr = [5,3,7,9,1,0,4]
insertSort(arr)