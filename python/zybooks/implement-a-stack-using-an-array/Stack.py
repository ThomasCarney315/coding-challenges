class Stack:
    def __init__(self, allocation_size):
        self.array = [None] * allocation_size
        self.top_index = -1

    # TODO: Write a method to push a value into the stack
    def push(self, el):
        i = self.top_index
        if i == 4:
            self.print_full()
            return
        else:
            self.array[i + 1] = el
            self.top_index += 1

    # TODO: Write a method to pop the top value from the stack
    def pop(self):
        i = self.top_index
        if i == -1:
            self.print_empty()
        else:
            self.array[i] = None
            self.top_index -= 1
            
    # Print method for full stack
    def print_full(self):
        print("Can't push, stack is full" )

    # Print method for empty stack    
    def print_empty(self):
        print("Can't pop, stack is empty")

    def print_stack(self):
        i = self.top_index
        while i >= 0:
            print(self.array[i])
            i = i - 1
        print()