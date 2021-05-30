// 定一个节点类
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

// 定义一个单链表类
class LList {
    constructor(item) {
        this.head = new Node(item)
    }

    // 查询对应的节点
    // 链表不能像数组一样通过下标或索引来查找对应的元素，只能用遍历的方式挨个对比
    find(item) {
        let currentNode = this.head
        // 最好情况就是第一个元素就是要查找的元素，时间复杂度为O(1)
        if (currentNode.element === item) {
            return currentNode
        } else {
            // 最差情况就是找到表尾，时间复杂度为O(n),平均时间复杂度为O(n)
            while (currentNode.element != item) {
                currentNode = currentNode.next
            }
        }
        return currentNode
    }

    // 在指定节点的后面插入一个新的节点
    insert(newElement, item) {
        let newNode = new Node(newElement)
        let currentNode = this.find(item)
        newNode.next = currentNode.next
        currentNode.next = newNode
        // console.log('currentNode', currentNode)
        // console.log('newNode', newNode)
    }

    display() {
        let currentNode = this.head
        while (currentNode.next != null) {
            console.log(currentNode)
            currentNode = currentNode.next
        }
    }

    remove(item) {
        let currentNode = this.head
        while (currentNode.next != null) {
            if (currentNode.element === item) {
                let preNode = this.findPre(item)
                preNode.next = currentNode.next
            }
            currentNode = currentNode.next
        }
    }

    findPre(item) {
        let currentNode = this.head
        while (currentNode.next != null && currentNode.next.element != item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    reverseList(){
        let prev = null
        let curr = this.head
        console.log('curr',curr)
        while(curr!=null){
            let cnext = curr.next
            console.log('cnext',cnext)
            curr.next = prev === null?null:prev
            prev = curr
            curr=cnext
        }
        this.head = prev
    }
}

// test
let list = new LList('head')
list.insert('hello', 'head')
list.insert('world', 'hello')
list.insert('data', 'world')
// console.log('after insert some nodes')
list.reverseList()
// console.log('after reverse lists')
list.display()
// console.log('find', list.find('head'))
// list.remove('hello')
// console.log('after delete a node from list')
// list.display()



function reverseList(head){
    let prev = null
    let curr = head

    while(head != null){
        let cnext = curr.next
        curr.next = prev === null ? null : prev
        prev = curr
        curr = cnext
    }
    return prev
}

// 第K大的数
function selectionSort(arr,K){

    if(!Array.isArray(arr)){
        throw Error('type error,excepted Array')
        return
    }

    let len = arr.length
    if(len < 2) return arr
    let minIndex = 0
    for(let i = 0; i < K; i++){
        minIndex = i
        for(let j = i + 1; j < len; j++){
            if(arr[minIndex] < arr[j]){
                minIndex = j
            }
        }
        if(i != minIndex){
            [arr[i], arr[minIndex]]  = [arr[minIndex], arr[i]]
        }
    }
    return arr
}