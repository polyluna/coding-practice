l = list(input())

for i in range(len(l)):
        if l[i].lower() not in ["a","o","y","e","u","i"]:
                print("."+l[i].lower(), end ="")

'''
s = input().lower()
vowels = {"a", "o", "y", "e", "u", "i"}

for ch in s:
    if ch not in vowels:
        print("." + ch, end="")
'''