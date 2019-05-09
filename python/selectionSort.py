#encoding: utf-8

def findSmallest(arr):
    smallest = arr[0]
    small_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            small_index = i
    return small_index

def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        print smallest
        newArr.append(arr.pop(smallest))
    return newArr
        

# test
print selectionSort([2,4,6,1,9,7,5])