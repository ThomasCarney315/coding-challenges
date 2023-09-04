from PlaneList import PlaneList

class PlaneQueue:
    def __init__(self):
        self.plane_list = PlaneList()
        self.length = 0
    
    # TODO: Write push() and pop() methods. push() adds an item to the queue
    #       and adds 1 to length. pop() removes and returns the first item in 
    #       the queue and subtracts 1 from length.
    def push(self, flight):
        self.plane_list.append(flight)
        self.length += 1
    
    def pop(self):
        curr = self.plane_list.head.flight_code
        self.plane_list.remove_after(None)
        self.length -= 1
        return curr

    def is_empty(self):
        return self.length == 0
        
    def print_queue(self):
        print('Air-traffic control queue')
        if not self.is_empty():
            print('   Next to land:', end=' ')
            cur_node = self.plane_list.head
            cur_node.print_node_data()
            print()
            
            if self.length > 1:
                print('   Arriving flights:')
                cur_node = cur_node.next
                while cur_node is not None:
                    print('      ', end='')
                    cur_node.print_node_data()
                    print()
                    cur_node = cur_node.next
        else:
            print('Queue is empty.')
        print()