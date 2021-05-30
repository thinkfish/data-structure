/*
*1.反转链表
*2.最小的K个数
*3.两数之和
*4.最长无重复子数组
*5.括号序列
*6.斐波那契数列
*/

// utils
function isObject(item) {
    return Object.prototype.toString.call(item) === '[object Object]'
}

// 1.反转链表
function ListNode(val) {
    this.val = val
    this.next = null
}
function ReverseList(pHead) {
    let curr = pHead
    let prev = null
    while (curr) {
        [curr.next,prev,curr] = [prev,curr,curr.next]
        /*let cnext = curr.next
        curr.next = prev
        prev = curr
        curr = cnext*/
    }
    return prev
}

// 2.最小的K个数
// 选择排序,升序排列，时间复杂度O(k*n)
function GetLeastNumbers(arr, k) {
    let len = arr.length
    if (len < 2) return arr
    let minIndex = 0
    for (let i = 0; i < k; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr.slice(0, k)
}

// 3.两数之和
function twoSum(arr, target) {
    // 参数校验，略
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}

// 4.最长无重复子数组
function maxSubArray(arr) {
    // 参数校验，略
    let subArr = []
    let len = arr.length
    let maxLength = 0
    for (let i = 0; i < len; i++) {
        let item = arr[i]
        if(!subArr.includes(item)){
            subArr.push(item)
        }else{
            subArr=[item]
        }
        maxLength = Math.max(subArr.length, maxLength)
    }
    return maxLength
}