function isObject(source){
    return Object.prototype.toString.call(source) === '[object Object]'
}

function deepClone(source, hash = WeakMap){
    if(!isObject(source)) return source
    if(hash.has(source)) return hash.get(source)

    let target = Array.isArray(source) ? [] : {}
    hash.set(source,target)

    let symKeys = Object.getOwnPropertySymbols(source)
    if(symKeys.length){
        symKeys.forEach(symkey => {
            if(isObject(source[symkey])){
                target[symkey] = deepClone(source[symkey])
            }else{
                target[symkey] = source[symkey]
            }
        })
    }

    for(var key in source){
        if(Object.prototype.hasOwnProperty(source, key)){
            if(isObject(source[key])){
                target[key] = deepClone(source[key])
            }else{
                target[key] = source[key]
            }
        }
    }

    return target
}


function isObject(obj){
    return Object.prototype.toString.call(obj) === '[object Object]'
}
function deepClone(source, hash = WeakMap){
    if(!isObject(source)) return source
    if(hash.has(source)) return hash.get(source)

    let target = Array.isArray(souce) ? [] : {}
    hash.set(source,target)

    let symKeys = Object.prototype.getOwnPropertySymbols(source)
    if(symKeys.length){
        symKeys.forEach(key => {
            if(isObject(symKeys[key])){
                target[key] = deepClone(symKeys[key])
            }else{
                target[key] = symKeys[key]
            }
        })
    }

    for(var key of souce){
        if(Object.prototype.hasOwnProperty(key)){
            target[key] = deepClone(source[key])
        }else{
            target[key] = source[key]
        }
    }
    return target
}

function selectionSort(arr){
    //校验
    if(!Array.isArray(arr)){
        throw Error('type error, excepted array')
        return
    }

    let len = arr.length
    if(len < 2) return arr
    let minIndex = 0
    for(let i = 0; i < len-1; i++){
        minIndex = i
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex != i){
            [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr

}