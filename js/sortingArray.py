array = [1, 4, 9, 10, 200, 40, 30, 20]

length = len(array)
for i in range(0,length-1):
    for j in range(length-i-1):
        if array[j] <array[j+1]:
            array[j+1],array[j] = array[j],array[j+1]
            print("Inside If =",array)

print(array)