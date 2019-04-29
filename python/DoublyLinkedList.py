#encoding:utf-8

class Node:

    def __init__(self,element):
        self.element = element
        self.next = None
        self.previous = None


class DoublyLinkedList:

    def __init__(self,head):
        self.head = Node(head)
        self.length = 1

    def find(self, item):
        currentNode = self.head
        while currentNode.next != None and currentNode.element != item:
            currentNode = currentNode.next
        return currentNode
        
    def insert(self, newElement, item):
        currentNode = self.find(item)
        newNode = Node(newElement)
        newNode.previous = currentNode
        newNode.next = currentNode.next
        currentNode.next = newNode
        self.length += 1
        pass

    def remove(self, item):
        currentNode = self.find(item)
        preNode = currentNode.previous
        preNode.next = currentNode.next
        currentNode.next.previous = preNode
        self.length -= 1
        pass

    def display(self):
        currentNode = self.head
        while currentNode.next != None:
            print currentNode
            currentNode = currentNode.next
    
    def findLast(self):
        currentNode = self.head
        while currentNode.next != None:
            currentNode = currentNode.next 
        return currentNode