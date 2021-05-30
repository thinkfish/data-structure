/**
 * 基本思想
 * 基于某个值 a[i], 对数组分区成两个部分
 * 对各自的分区进行整理，a[i]左边数组的所有值都小于等于a[i],a[i]右边的数组的所有值都大于等于a[i]
 * 递归
 * 对整理后的两个数组，递归调用上述方法
 */
// import {less,swap} from './utils'

// function quickSort(arr) {

//     if (!Array.isArray(arr)) {
//         throw Error('type error')
//         return
//     }

//     const len = arr.length
//     console.log(arr)
//     console.log('len=>',len)
//     if(len < 2){
//         return arr
//     }else{
//         const pivotIndex = Math.floor(len/2)
//         console.log('pivotIndex=>',pivotIndex)
//         const pivot = arr.splice(pivotIndex, 1)[0]
//         console.log('pivot=>',pivot)
//         const less = []
//         const greater = []
//         for(let i = 0; i < len; i++){
//             if(arr[i] < pivot){
//                 less.push(arr[i])
//             }else{
//                 greater.push(arr[i])
//             }
//         }
//         console.log(less)
//         console.log(greater)
//         return quickSort(less).concat([pivot]).conact(quickSort(greater))
//     }
// }


function quickSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    console.log('pivotIndex=>',pivotIndex)
    let pivot = arr.splice(pivotIndex, 1)[0]
    console.log('pivot=>',pivot)
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    // 递归
    return quickSort(left).concat([pivot], quickSort(right))
  }

var arr1 = [1,3,5,2,7,5,9,0]
arr1 = quickSort(arr1)
console.log(arr1)



Array.prototype.mm= function (fn, int) {
    let arr = Array.prototype.slice.call(this)
    let res
    let startIndex
    if (int === undefined){
        for (let i=0;i<arr;i++){
            if (!arr.hasOwnProperty(i)) continue
            startIndex = i;
            res = arr[i]
            break
        } 
    } else{
        res = int
    }
    for ( let i = startIndex || 0; i<arr.length;i++){
        if (!arr.hasOwnProperty(i)) continue
        res = fn.call(null, res, arr[i], i, this)
    } 
    return res
}