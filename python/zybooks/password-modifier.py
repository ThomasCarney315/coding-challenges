# 6.7 OPTIONAL Lab: Password modifier
# This section has been set as optional by your instructor.
# Many user-created passwords are simple and easy to guess. Write a program that takes a simple password and makes it stronger by replacing characters using the key below, and by appending "!" to the end of the input string.

# i becomes 1
# a becomes @
# m becomes M
# B becomes 8
# s becomes $
# Ex: If the input is:

# mypassword
# the output is:

# Myp@$$word!
# Hint: Python strings are immutable, but support string concatenation. Store and build the stronger password in the given password variable.

word = input()
password = ''

length = len(word)

for l in range(length):
    if word[l] == 'i':
        password += '1'
    elif word[l] == 'a':
        password += '@'
    elif word[l] == 'm':
        password += 'M'
    elif word[l] == 'B':
        password += '8'
    elif word[l] == 's':
        password += '$'
    else:
        password += word[l]
password += '!'
print(password)
    