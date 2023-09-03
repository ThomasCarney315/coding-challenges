class PersonList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, new_node):
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node

    def prepend(self, new_node):
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def insert_after(self, current_node, new_node):
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        elif current_node is self.tail:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
        else:
            successor_node = current_node.next
            new_node.next = successor_node
            new_node.prev = current_node
            current_node.next = new_node
            successor_node.prev = new_node
   
    def remove(self, current_node):
        successor_node = current_node.next
        predecessor_node = current_node.prev

        if successor_node is not None:
            successor_node.prev = predecessor_node

        if predecessor_node is not None:
            predecessor_node.next = successor_node

        if current_node is self.head:
            self.head = successor_node

        if current_node is self.tail:
            self.tail = predecessor_node

    def print_person_list(self):
        current_node = self.head
        while current_node != None:
            current_node.print_node_data()
            current_node = current_node.next
            
    def find_first(self, age):
        # TODO: Write findFirst() method          
        # Find the node with the first occurrence of the age                                      
        # Start with the headNode and traverse forward
        current = self.head
        if current.age == age:
            return current
        while current.age != age:
            current = current.next
            if current is None:
                break
            if current.age == age:
                return current
        return None

    def find_last(self, age):
        # TODO: Write findLast() method     
        # Find the node with the last occurrence of the age                                       
        # Start with the tailNode and traverse backward
        current = self.tail
        if current.age == age:
            return current
        while current.age != age:
            current = current.prev
            if current is None:
                break
            if current.age == age:
                return current
        return None