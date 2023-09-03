from PersonNode import PersonNode
from PersonList import PersonList

if __name__ == "__main__":
    person_list = PersonList()
    
    # Read input lines until encountering '-1'
    input_line = input()
    while input_line != '-1':
        split_input = input_line.split(' ')
        name = split_input[0]
        age = int(split_input[1])
        new_node = PersonNode(name, age)
        person_list.append(new_node)
        input_line = input()
        
    print('List before replacing:')
    person_list.print_person_list()
    
    # Find first
    find_age = int(input())
    found_first = person_list.find_first(find_age)
    if found_first != None:
        replace_name = input()
        found_first.name = replace_name
        print()
        print('List after replacing the first occurrence of %s:' % find_age)
        person_list.print_person_list()
    else:
        print('Age value not found in the list.')
    
    # Find last
    find_age = int(input())
    found_last = person_list.find_last(find_age)
    if found_last != None:
        replace_name = input()
        found_last.name = replace_name
        print()
        print('List after replacing the last occurrence of %s:' % find_age)
        person_list.print_person_list()
    else:
        print('Age value not found in the list.')