class Stack:
    def __init__(self, allocation_size):
        self.array = [None] * allocation_size
        self.top_index = -1

    # TODO: Write a method to push a value into the stack

    # TODO: Write a method to pop the top value from the stack

    def print_stack(self):
        i = self.top_index
        while i >= 0:
            print(self.array[i])
            i = i - 1
        print()