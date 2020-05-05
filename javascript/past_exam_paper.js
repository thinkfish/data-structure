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
        console.log('当前字符为:=>',ch)
        if(ch === "(" || ch === "[" || ch === "{"){
            stack.push(leftToRight[ch])
            console.log('当前栈内容为1:=>', stack)
        }else{
            console.log('当前栈内容为2:=>', stack)
            if(!stack.length || stack.pop() !== ch){
                return false
            }
        }
    }

    return !stack.length

}
