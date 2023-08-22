class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # TODO: Write append() method
    def append(self, new_node):
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

    def prepend(self, new_node):
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node

    def insert_after(self, current_node, new_node):
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        elif current_node is self.tail:
            self.tail.next = new_node
            self.tail = new_node
        else:
            new_node.next = current_node.next
            current_node.next = new_node
            
    def remove_after(self, current_node):
        # Special case, remove head
        if (current_node == None) and (self.head != None):
            succeeding_node = self.head.next
            self.head = succeeding_node  
            if succeeding_node == None: # Remove last item
                self.tail = None
        elif current_node.next != None:
            succeeding_node = current_node.next.next
            current_node.next = succeeding_node
            if succeeding_node == None: # Remove tail
                self.tail = current_node

    # TODO: Write search() method that locates node with the same data value 
    #       (data) as the key and sets the found node's position (node_pos)
    def search(self, val):
        if self.head == None:
            return None
        else:
            pos = 1
            curr = self.head
            curr.node_pos = pos
            while curr.data != val:
                if curr.next:
                    curr = curr.next
                    pos += 1
                    curr.node_pos = pos
                else:
                    break
            if curr.data == val:
                return curr
            else:
                return None
    def print_list(self):
        cur_node = self.head
        while cur_node != None:
            cur_node.print_node_data()
            cur_node = cur_node.next