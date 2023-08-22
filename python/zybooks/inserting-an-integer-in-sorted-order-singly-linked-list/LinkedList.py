class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

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
            
    # TODO: Write insert_in_ascending_order() method
    def insert_in_ascending_order(self, new_node):
        if self.head == None:
            self.append(new_node)
        elif self.head.data > new_node.data:
            self.prepend(new_node)
        elif self.head.next:
            curr = self.head
            while curr.next.data < new_node.data:
                if curr.next.next:
                    curr = curr.next
                else:
                    break
            if curr.next.data < new_node.data:
                curr = curr.next
                self.insert_after(curr, new_node)
            elif curr.next.data > new_node.data:
                self.insert_after(curr, new_node)
        else:
            self.append(new_node)
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

    def print_list(self):
        cur_node = self.head
        while cur_node != None:
            cur_node.print_node_data()
            print(end=' ')
            cur_node = cur_node.next
      