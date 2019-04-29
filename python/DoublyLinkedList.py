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
        self.length += 1
        pass

    def remove(self, item):
        self.length -= 1
        pass

    def display(self):
        pass
    
    def findLast(self):
        currentNode = self.head
        while currentNode.next != None:
            currentNode = currentNode.next 
        return currentNode