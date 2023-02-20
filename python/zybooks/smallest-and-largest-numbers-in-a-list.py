# OPTIONAL Lab: Smallest and largest numbers in a list
# This section has been set as optional by your instructor.
# Write a program that reads a list of integers into a list as long as the integers are greater than zero, then outputs the smallest and largest integers in the list.

# Ex: If the input is:

# 10
# 5
# 3
# 21
# 2
# -6
# the output is:

# 2 and 21
# You can assume that the list of integers will have at least 2 values.

list = []
num = int(input())
while num > 0:
    list.append(num)
    num = int(input())
    
print(f'{min(list)} and {max(list)}')