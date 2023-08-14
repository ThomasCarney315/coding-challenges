# LAB: Descending selection sort with output during execution
# Write the function selection_sort_descend_trace() that takes an integer list and sorts the list into descending order. The function should use nested loops and output the list after each iteration of the outer loop, thus outputting the list N-1 times (where N is the size).

# Complete __main__ to read in a list of integers, and then call selection_sort_descend_trace() to sort the list.

# Ex: If the input is:

# 20 10 30 40
# then the output is:

# 40 10 30 20 
# 40 30 10 20 
# 40 30 20 10 

# TODO: Write a selection_sort_descend_trace() function that 
#       sorts the numbers list into descending order
def selection_sort_descend_trace(numbers):
    for i in range(len(numbers) - 1):

        index_largest = i
        for j in range(i + 1, len(numbers)):
            if numbers[j] > numbers[index_largest]:
                index_largest = j
        temp = numbers[i]
        numbers[i] = numbers[index_largest]
        numbers[index_largest] = temp
        
        show = ''
        for n in numbers:
            show += str(n) + ' '
        print(show)
    

if __name__ == "__main__":
    numbers = []
    nums = input()
    nums = nums.split(' ')
    for n in nums:
        numbers.append(int(n))
    selection_sort_descend_trace(numbers)
