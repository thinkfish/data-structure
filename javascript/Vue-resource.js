const typeTo = val => Object.prototype.toString.call(val)

function defineReactive(obj, key, value){
    let dep = new Dep()
    Object.defineProperty(obj,key,{
        set(newValue){
            if(newValue === value)return
            dep.notify()
            value = newValue
        },
        get(){
            dep.addSub(window.target)
            return value
        }
    })
}

function walk(obj){
    // 对于一个对象所有的key都进行绑定
    Object.keys(obj).forEach(key=>{
        // 进行监听
        // 如果对应key的值是个对象，那就递归调用walk
        if(typeTo(obj[key]) === '[object Object]'){
            walk(obj[key])
        }else{
            defineReactive(obj,key,obj[key]);
        }
    })
}

// 只要value内部发生了变化，变调用一下
function observe(value){
    if(typeTo(value) === '[object Object]'){
        return null
    }   
    walk(value)
}

// Dependency
class Dep{
    constructor(){
        // 谁都依赖了我？依赖队列
        this.subs = []
    }
    addSub(sub){
        if(this.subs.indexOf(sub) === -1){
            this.subs.push(sub)
        }
    }

    // 别人依赖我，我一旦notify了，则告诉所有自己的孩子们，调用一下update
    notify(){
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

// 我依赖别人，别人变了的话，调用一下我的update方法
class Watcher{
    constructor(data, getter){
        this.getter = getter
        this.value = this.get()
    }

    get(){
        window.target = this
        this.getter()
        window.target = null
    }

    update(){
        this.value = this.get()
    }
}

class Vnode{
    constructor(tagName, data, children){
        this.tagName = tagName
        this.data = data
        if(typeTo(children) === '[object Array]'){
            this.children = children
        }else{
            this.text = children
        }
    }
}

class Vue{
    constructor(options){
        this.$options = options
        this.render = options.render
        this._data = options.data()
        this.$el = typeof options.el === 'string'?document.querySelector(options.el):options.el
        observe(this._data, ()=>{
            console.log('数据变了', this._data)
        })
        new Watcher(this._data, () => {
            this.$mount(this.$el)
        })
        // this.$mount(this.$el)
    }

    createElement(tagName, data, children){
        return new Vnode(tagName,data,children)
    }
    //挂载方法
    $mount(root){
        const vNode = this.render(this.createElement)
    }
}