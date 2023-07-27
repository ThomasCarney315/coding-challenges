# Words in a range (lists)
# Write a program that first reads in the name of an input file, followed by two strings representing the lower and upper bounds of a search range. The file should be read using the file.readlines() method. The input file contains a list of alphabetical, ten-letter strings, each on a separate line. Your program should output all strings from the list that are within that range (inclusive of the bounds).

# Ex: If the input is:

# input1.txt
# ammoniated
# millennium
# and the contents of input1.txt are:

# aspiration
# classified
# federation
# graduation
# millennium
# philosophy
# quadratics
# transcript
# wilderness
# zoologists
# the output is:

# aspiration
# classified
# federation
# graduation
# millennium
# Notes:

# There is a newline at the end of the output.
# input1.txt is available to download.
# In the tests, the first word input always comes alphabetically before the second word input.

f = input()
bound1 = input() +'\n'
bound2 = input() +'\n'
with open(f, 'r') as file:
    lines = file.readlines()
    
    for word in lines:
        if bound1 <= word <= bound2:
            word = word.replace('\n', '')
            print(word)