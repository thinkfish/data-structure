class Dep{
    constructor(){
        this.deps = []
    }

    depend(){
        if(Dep.target && this.deps.indexOf(Dep.target) === -1){
            this.deps.push(Dep.target)
        }
    }

    notify(){
        this.deps.forEach(dep => {
            dep()
        })
    }
}

Dep.target = null

class Observable{
    constructor(obj){
        this.walk(obj)
    }

    walk(obj){
        const keys = Object.keys(obj)
        keys.forEach(key => {
            this.defineReactive(obj,key,obj[key])
        })
        return obj
    }

    defineReactive(obj,key,val){
        const dep = new Dep()
        Object.defineProperty(obj,key,{
            get(){
                dep.depend()
                return val
            },
            set(newVal){
                val = newVal
                dep.notify()
            }
        })
    }
}

class Watcher {
    constructor(obj,key,cb,onComputedUpdate){
        this.obj = obj
        this.key = key
        this.cb = cb
        this.onComputedUpdate = onComputedUpdate
        return this.defineComputed()
    }

    defineComputed(){
        const self = this
        const onDepUpate = () =>{
            const val = self.cb()
            this.onComputedUpdate(val)
        }

        Object.defineProperty(self.obj,self.key,{
            get(){
                Dep.target = onDepUpate
                const val = self.cb()
                Dep.target = null
                return val
            },
            set(){
                console.error('计算属性无法赋值！')
            }
        })
    }

}

const hero = new Observable({
    health: 3000,
    IQ: 150
})

new Watcher(hero, 'health', () => {
    return hero.health > 4000 ? '坦克': '脆皮'
},(val) => {
    console.log(`我的英雄类型是：${val}`)
})