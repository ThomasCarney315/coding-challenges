# Sorting TV Shows (dictionaries and lists)
# Write a program that first reads in the name of an input file and then reads the input file using the file.readlines() method. The input file contains an unsorted list of number of seasons followed by the corresponding TV show. Your program should put the contents of the input file into a dictionary where the number of seasons are the keys, and a list of TV shows are the values (since multiple shows could have the same number of seasons).

# Sort the dictionary by key (least to greatest) and output the results to a file named output_keys.txt, separating multiple TV shows associated with the same key with a semicolon (;). Next, sort the dictionary by values (alphabetical order), and output the results to a file named output_titles.txt.

# Ex: If the input is:

# file1.txt
# and the contents of file1.txt are:

# 20
# Gunsmoke
# 30
# The Simpsons
# 10
# Will & Grace
# 14
# Dallas
# 20
# Law & Order
# 12
# Murder, She Wrote
# the file output_keys.txt should contain:

# 10: Will & Grace
# 12: Murder, She Wrote
# 14: Dallas
# 20: Gunsmoke; Law & Order
# 30: The Simpsons
# and the file output_titles.txt should contain:

# Dallas
# Gunsmoke
# Law & Order
# Murder, She Wrote
# The Simpsons
# Will & Grace
# Note: There is a newline at the end of each output file, and file1.txt is available to download.

f = input()
clean = []
shows_dict = {}

with open(f, 'r') as file:
    lines = file.readlines()
    for line in lines:
        clean.append(line.strip('\n'))
    last_key = None
    for line in clean:
        if line.isdigit():
            last_key = line
            if line in shows_dict:
                continue
            else:
                shows_dict.update({line: []})
        else:
            shows_dict[last_key].append(line)

with open('output_keys.txt', 'w') as seasons:
    for key in sorted(shows_dict.keys()):
        seasons.write(f'{key.lstrip("0")}: {"; ".join(shows_dict[key]) }\n')  

with open('output_titles.txt', 'w') as titles:
    titles_list = []
    for key in shows_dict:
        titles_list += shows_dict[key]
    for title in sorted(titles_list):
        titles.write(f'{title}\n')