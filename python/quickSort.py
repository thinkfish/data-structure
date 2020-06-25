def quickSort(array):
    len = len(array)
    if len < 2:
        return array
    else:
        qviot = array[0]
        less = [i for in arrar[1:] if i<= qviot]
        greater = [i for in arrar[1:] if i> qviot]
        return quickSort(less) + [qviot] + quickSort(greater)
