#encoding:utf-8

'''
链表与数组的区别在于：
1，链表不需要连续的内存空间，而数组需要一块连续的内存空间
2，链表不能通过下标或索引的方式随机访问元素，要访问元素只能通过遍历的方式
3，单链表除存储本节点的数据外，还存储了下一个节点的引用或指针
4，数组访问可以利用CPU缓存，读取效率会要更高，受CPU缓存的限制以及依赖连续的内存，能存储的数据也有限，是用时间换空间，而链表是用空间换时间
'''

# Node类
# 包含当前节点的值，以及后驱节点的引用
class Node:
    def __init__(self, element):
        self.element = element
        self.next = None

# 单链表类
class Llist:

    def __init__(self,headElement):
        '''初始化头节点'''
        self.head = Node(headElement)

    def length(self):
        len = 1
        currentNode = self.head
        while currentNode.next != None:
            len += 1
            currentNode = currentNode.next
            print len
        return len
        
    def find(self, item):
        currentNode = self.head
        while currentNode.element != item:
            currentNode = currentNode.next
        return currentNode

    def findPrevious(self,item):
        currentNode = self.head
        while currentNode.next != None and currentNode.next.element != item:
            currentNode = currentNode.next
        return currentNode

    def insert(self, newElement, item):
        newNode = Node(newElement)
        current = self.find(item)
        newNode.next = current.next
        current.next = newNode
        print current
        print newNode

    def remove(self,item):
        preNode = self.findPrevious(item)
        currentNode = preNode.next
        print 'preNode=>'
        print preNode
        print 'currentNode=>'
        print currentNode
        if preNode.next != None:
            preNode.next = currentNode.next

    def display(self):
        currentNode = self.head
        index = 0
        while currentNode.next != None:
            index += 1
            print index
            print str(index) +':'+ currentNode.element
            currentNode = currentNode.next


# 单链表功能测试
headElement = 'head'
llist = Llist(headElement)
llist.insert("Conway", headElement)
llist.insert("Russellville", "Conway")
llist.insert("Alma","Russellville")
llist.display()
llist.remove('Conway')
print llist.length()

# 常见算法题，反转一个单链表
def reverseLList(list):
    print list.__dict__

reverseLList(llist)
llist.display()

