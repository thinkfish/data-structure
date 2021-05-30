var foo = {
    value:1    
}

function bar(){
    console.log('this is value:',this.value)
}

function myCall(context){
    if(typeof context == 'object'){
        context = context || window
    }else{
        context = Object.create(null)
    }

    let params = [...argeuments].slice(1)
    context.fn = this
    context.fn(...params)
    delete context.fn

}


function instanceOf(left, right){
    let proto = left.__proto__
    let prototype = right.prototype
    while(true){
        if(proto == null){
            return false
        }
        if(proto == prototype){
            return true
        }
        proto = proto.__proto__
    }
}