# solution 1
# TODO: Write recursive print_num_pattern() function
def print_num_pattern(a, b, start):
    def back_up(a, b, start):
        if a <= start:
            print(a, end=' ')
            back_up(a + b, b, start)
            
    if a > 0:
        print(a, end=' ')
        print_num_pattern(a - b, b, start)
    else:
        
        back_up(a,b,start)
# solution 2
# TODO: Write recursive print_num_pattern() function
def print_num_pattern(a, b, start, up = True):
            
    if a > 0 and up:
        print(a, end=' ')
        print_num_pattern(a - b, b, start)
    elif a <= start:
        
        print(a, end=' ')
        print_num_pattern(a + b, b, start, False)
        
# solution 3
# TODO: Write recursive print_num_pattern() function
def print_num_pattern(a, b):        
    print(a, end=' ')
    if a > 0:
        print_num_pattern(a - b, b,)
    else:
        return
    print(a, end=' ')


if __name__ == "__main__":
    num1 = int(input())
    num2 = int(input())
    print_num_pattern(num1, num2, num1)