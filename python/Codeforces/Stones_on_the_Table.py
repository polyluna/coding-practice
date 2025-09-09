n = int(input())
x = list(input())
count = 0

for i in range(n-1):
        if x[i] == x[i+1]:
                count +=1

print (count)

'''
n = int(input())
x = list(input())

count = sum(1 for i in range(n - 1) if x[i] == x[i + 1])
print(count)
'''