for i in range (5):
        num = list(map(int,input().split()))
        if 1 in num :
                x = i+1
                y = num.index(1)+1
                break

print (abs(x-3)+abs(y-3))


'''

import numpy as np

#matrix = [[ input() for j in range(5)] for i in range(5)]
matrix = [list(map(int, input().split())) for _ in range(5)]
a = np.array(matrix)

rows,cols = np.where (a==1)
if len(rows)==0:
        print("Error: the matrix does not contain 1")
else:
        row = rows[0]
        col = cols[0]
        print (abs(row-2)+abs(col-2))

'''
