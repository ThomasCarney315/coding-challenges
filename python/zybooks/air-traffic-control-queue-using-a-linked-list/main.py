from PlaneQueue import PlaneQueue
from PlaneNode import PlaneNode

if __name__ == "__main__":
    plane_queue = PlaneQueue()
    
    # TODO: Read in arriving flight codes and whether a flight has landed. 
    #       Print the queue after every push() or pop() operation. If the user
    #       entered "landed", print which flight has landed. Continue until -1 
    #       is read.
    flight = input()
    while flight != '-1':
        if flight == 'landed':
            landing = plane_queue.pop()
            print(f'{landing} has landed.')
        else:
            flight_num = flight.split(' ')
            flight_num = flight_num[1]
            plane_queue.push(PlaneNode(flight_num))
        plane_queue.print_queue()
        flight = input()