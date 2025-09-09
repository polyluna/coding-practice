a,b = map(int,input().split())

i =1

while True:
        a = a*3
        b = b*2
        if a>b:
                print (i)
                break
        else:
                i+=1
        if i > 1000:  # safety break
                print("Limit reached")
                break

