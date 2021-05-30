/**
 * call,apply,bind原生JS的实现
 */

let foo = {
    value: 1
}

function bar() {
    console.log("value:::", this.value)
}

// call方法的实现
Function.prototype.newCall = function(context){
    //判断context是否对象，或是否存在
    if(typeof context === 'object'){
        context = context || window
    }else{
        context = Object.create(null)
    }

    // 要改变this指向，就相当于在当前对象上挂载一个fn，且fn指向调用call方法的函数
    context.fn = this
    //取参
    let parameters = [...arguments].slice(1)
    context.fn(...parameters)
    // 因为fn本不属于context,最后需要把这个属性删除
    delete context.fn
}

bar.newCall(foo)

// apply方法的实现与call基本一致，传参的方式不一样
Function.prototype.newApply = function(context){
    //判断context是否对象，或是否存在
    if(typeof context === 'object'){
        context = context || window
    }else{
        context = Object.create(null)
    }

    // 要改变this指向，就相当于在当前对象上挂载一个fn，且fn指向调用call方法的函数
    context.fn = this
    // 取参数
    let parameters = [...arguments].slice(1)
    // 就此处在执行函数时的传参方式不一样，apply传的是个数组
    context.fn(parameters)
    // 因为fn本不属于context,最后需要把这个属性删除
    delete context.fn
}

bar.newApply(foo)


// instanceOf的实现
// 沿着原型链一直往上找，直到找到null
function myInstanceOf(left, right){
    let proto = left.__proto__
    let prototype = right.prototype
    while(true){
        if(proto === null){
            return false
        }
        if(proto == prototype){
            return true
        }
        proto = proto.__proto__
    }
}

// eventEmitter
class EventEmitter {
    constructor(){
        this.events = {}
    }

    on(name, cb){
        if(this.events[name]){
            this.events[name] = [cb]
        }else{
            this.events[name].push(cb)
        }
    }
    emit(name, args){
        if(this.events[name]){
            this.events[name].forEach(fn => {
                fn(this, ...args)
            })
        }
    }
    off(name, cb){
        if(this.events[name]){
            this.events[name] = this.events[name].filter(fn => {
                return fn != cb
            })
        }
    }
    once(name, fn){
        const onlyOnce = () => {
            fn.apply(this, arguments)
            this.off(name, onlyOnce)
        }
        this.on(name, onlyOnce)
        return this
    }
}



function debouce(func, wait, immediate){

    var timeout, result
    
    function debounced(){
        var context = this
        var args = arguments

        if(timeout) clearTimeout(timeout)

        if(immediate){
            var callNow = !timeout
            timeout = setTimeout(function(){
                timeout = null
            },wait)
            if(callNow) result = func.apply(context, args)
        }else{
            timeout = setTimeout(function(){
                result = func.apply(context, args)
            }, wait)
        }
        return result
    }

    debounced.cancel = function(){
        clearTimeout(timeout)
        timeout = null
    }

    return debounced
}


function debounce(func, wait, immediate){

    var timeout,result;
    
    var debounced = function(){
        const context = this
        const args = arguments

        if(timeout) clearTimeout(timeout)

        if(immediate){
            let callNow = !timeout
            timeout = setTimeout(function(){
                // 此处会在等待时间之后将timeout清除，在这期间callNow一直为false，函数执行将被锁定
                timeout = null
            },wait)
            if(callNow) result = func.apply(context, args)
        }else{
            timeout = setTimeout(function(){
                result = func.apply(context,args)
            },wait)
        }
        return result
    }

    debounced.cancel = function(){
        clearTimeout(timeout)
        timeout = null
    }

    return debounced

}