from IntNode import IntNode
from IntList import IntList

if __name__ == "__main__":
    int_list = IntList()
    
    input_line = input()
    input_strings = input_line.split(' ')
    
    for num_string in input_strings:
        # Convert from string to integer
        num = int(num_string)

        # Insert into linked list in descending order
        new_node = IntNode(num)
        int_list.insert_in_descending_order(new_node)
        
    int_list.print_int_list()