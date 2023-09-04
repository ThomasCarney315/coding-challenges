from Stack import Stack

if __name__ == "__main__":
    
    stack = Stack(5)
    
    input_line = input()
    while input_line != '-1':
        split_input = input_line.split(' ')
        command = split_input[0]
        
        if command == 'Push':
            number_to_push = int(split_input[1])
            stack.push(number_to_push)
            print('Stack contents (top to bottom):')
            stack.print_stack()
        elif command == "Pop":
            stack.pop()
            print('Stack contents (top to bottom):')
            stack.print_stack()
        
        input_line = input()