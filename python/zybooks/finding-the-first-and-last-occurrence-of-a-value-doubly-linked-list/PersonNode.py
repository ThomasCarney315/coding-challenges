class PersonNode:
    def __init__(self, name = '', age = 0, prev = None, next = None):
        self.name = name
        self.age = age
        self.next = next
        self.prev = prev
        
    def print_node_data(self):
        print("%s, %d" % (self.name, self.age))