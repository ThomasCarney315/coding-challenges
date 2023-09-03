class IntNode:
    def __init__(self, initial_data, next = None, prev = None):
        self.data = initial_data
        self.next = next
        self.prev = prev