/**
 * 基本思想
 * 基于某个值 a[i], 对数组分区成两个部分
 * 对各自的分区进行整理，a[i]左边数组的所有值都小于等于a[i],a[i]右边的数组的所有值都大于等于a[i]
 * 递归
 * 对整理后的两个数组，递归调用上述方法
 */
import {less,swap} from './utils'

function quickSort(arr) {

    if (!Array.isArray(arr)) {
        throw Error('type error')
        return
    }

    const len = arr.length
    if(len < 2){
        return arr
    }else{
        const pivot = arr[0]
        const less = []
        const greater = []
        for(let i = 1; i < len; i++){
            if(arr[i] <= pivot){
                less.push(arr[i])
            }else{
                greater.push(arr[i])
            }
        }
        console.log(less)
        console.log(greater)
        return quickSort(less).concat([pivot]).concat(greater)
    }
}