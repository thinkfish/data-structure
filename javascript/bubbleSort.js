/**
 * 冒泡排序
 */

 function bubbleSort(arr){
     if(!Array.isArray(arr)){
         throw Error('type error')
         return
     }
     const len = arr.length

     if(len < 2){
        return arr
    }else{
         for(let i = 0 ; i < len; i++){
             for(let j = 0; j < len - 1; j++){
                 if(arr[j] < arr[j+1]){
                     [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
                 }
             }
         }
         return arr
     }
 }


 /**
  * 冒泡排序优化
  * 主要优化点是，经过一轮的排序，数组尾部已经是有序的了，没有必要遍历一次
  */
 function bubbleSortOptimize(arr){
    if(!Array.isArray(arr)){
        throw Error('type error')
        return
    }
    const len = arr.length

    if(len < 2){
        return arr
    }else{
        for(let i = 0 ; i < len; i++){
            for(let j = 0; j < len - 1 - i; j++){
                if(arr[j] < arr[j+1]){
                    [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
                }
            }
        }
        return arr
    }
 }

let arr = [3, 5, 1, 2, 8, 6, 9]
console.log(bubbleSort(arr))
console.log(bubbleSortOptimize(arr))