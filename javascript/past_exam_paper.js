/**
 * 常见真题练习
 */

/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足： 左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
*/

const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const isValid = (str) => {
    if (!str) {
        return true
    }

    const stack = []
    const len = str.length

    for (let i = 0; i < len; i++) {
        const ch = str[i]
        console.log('当前字符为:=>', ch)
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(leftToRight[ch])
            console.log('当前栈内容为1:=>', stack)
        } else {
            console.log('当前栈内容为2:=>', stack)
            if (!stack.length || stack.pop() !== ch) {
                return false
            }
        }
    }

    return !stack.length

}

/*
* @description: 最长不重复子字符串
* @params: [String] str 需要查找的字符串
* @result: [Number] 返回的结果
 */
var lengthOfLongestSubstring = function (str) {
    if (!str.length) return 0
    let tmpStr = ''
    let maxStrLen = 0
    let len = str.length
    let left = 0
    for (let i = 0; i < len; i++) {
        console.log('tmpStr=>', tmpStr)
        console.log('str[i]', i, str[i])
        if (tmpStr.indexOf(str[i]) !== -1) {
            console.log('left=>', left)
            left += str.slice(left, i).indexOf(str[i]) + 1
            continue
        }
        tmpStr = str.slice(left, i + 1)
        console.log('tmpStr2=>', tmpStr)
        maxStrLen = Math.max(maxStrLen, tmpStr.length)
    }
    console.log('maxStrLen=>', maxStrLen)
    return maxStrLen
}

var str = 'abcdefgabcbb'
lengthOfLongestSubstring(str)


// rgba to hex
// 这个写法太挫
function toHex(color) {
    var value = color.replace(/rgba\(/, '').replace(/\)/, '').split(',')
    var a = value[3] || 1
    var r = Math.floor(a * parseInt(value[0]) + (1 - a) * 255);
    var g = Math.floor(a * parseInt(value[1]) + (1 - a) * 255);
    var b = Math.floor(a * parseInt(value[2]) + (1 - a) * 255);

    return '#' +
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2)

}


// foreach 的实现
function myForeach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i], i, array)
    }
}
function callback(value, index, array) {
    console.log(value)
    console.log(index)
    console.log(array)
}
var arr = [1, 2, 3, 4]
myForeach(arr, callback)

Array.prototype.myForeach = function (cb, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (typeof cb === 'function') {
            cb.call(thisArg, this[i], i, this)
        }
    }
}

// 合并数组
// 循环
function mergeArr(a, b) {

    let [i, j] = [0, 0]
    var newArr = []
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            newArr.push(a[i])
            i++
        } else if (a[i] > b[j]) {
            newArr.push(b[j])
        } else {
            newArr.push(a[i])
            newArr.push(b[j])
            i++
            j++
        }
    }

    if (i < a.length) {
        return newArr.concat(a.slice(i))
    }
    if (j < b.length) {
        return newArr.concat(b.slice(j))
    }
    return newArr
}

// 合并两个有序数组
function mergeArr1(num1, num2) {
    let m = num1.length
    let n = num2.length
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1
    while (p1 >= 0 && p2 >= 0) {
        num1[p--] = (num1[p1] < num2[p2] ? num2[p2--] : num1[p1--])
    }
    return num1
}

// node 判断文件是否存在
const fs = require('fs')
fs.access(filePath, fs.constants.F_OK, err => {
    console.log(`${filePath}${err ? "存在" : "不存在"}`)
})

// js控制并发请求数量
class LimitReuqest {
    constructor(limit) {
        this.limit = limit
        this.currentNum = 0
        this.requests = []
    }

    requests(reqFn) {
        if (!reqFn || typeof reqFn !== 'function') {
            console.error('reqFn is not a function, BUT arguments excepted a Function', reqFn)
            return
        }
        this.requests.push(reqFn)
        if (this.currentNum < this.limit) {
            this.run()
        }
    }

    async run() {
        try {
            ++this.currentNum
            const fn = this.requests.shift()
            await fn()
        } catch (err) {
            console.log('err', err)
        } finally {
            --this.currentNum
            if (this.requests.length) {
                this.run()
            }
        }
    }
}

// 把一个数组的0都移动末尾
function removeZeros(arr) {
    if (!Array.isArray(arr)) {
        throw Error('arguments must be a array')
        return []
    }
    let len = arr.length
    if (len < 2) return arr
    for (let i = 0; i < len; i++) {
        let item = arr[i]
        if (item == 0) {
            arr.splice(i, 1)
            arr.push(item)
        }
    }
    return arr
}

function removeZeros1(arr) {
    // 参数检验
    let left = 0
    let right = 0
    let len = arr.length
    while (right < len) {
        if (arr[right] != 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
        }
        right++
    }
    return arr
}


var obj = {
    a: 1,
    b: {
        c: {
            d: 2
        }
    },
    c: false
}

var tmpl = `
    a {{ obj.a  }
    b{obj.b.c}
    c{obj.c.d.e}
    `

// a {
//     1
//     b{ "d": 2 }
//     c{ obj.c.d.e }


    var pattern = /\{\s{0,}obj.[a-z].*\}/img,
    var arr = tmpl.match(pattern)
    function isObject(item) {
        return Object.prototype.toString.call(item) === '[object Object]'
    }
    arr.forEach(item => {
        var value = null
        try {
            value = eval(item.toString())
            console.log('value1=>',value)
        }
        catch (e) {
            value = null
        }
        if (value) {
            console.log('value2=>',value)
            tmpl = tmpl.replace(item, isObject(value) ? JSON.stringify(value) : value)
        }

    })
    console.log(tmpl)