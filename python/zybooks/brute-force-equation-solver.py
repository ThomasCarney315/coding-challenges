# 6.8 OPTIONAL Lab: Brute force equation solver
# This section has been set as optional by your instructor.
# Numerous engineering and scientific applications require finding solutions to a set of equations. Ex: 8x + 7y = 38 and 3x - 5y = -1 have a solution x = 3, y = 2. Given integer coefficients of two linear equations with variables x and y, use brute force to find an integer solution for x and y in the range -10 to 10.

# Ex: If the input is:

# 8
# 7
# 38
# 3
# -5
# -1
# Then the output is:

# x = 3 , y = 2
# Use this brute force approach:

# For every value of x from -10 to 10
#    For every value of y from -10 to 10
#       Check if the current x and y satisfy both equations. If so, output the solution, and finish.
# Ex: If no solution is found, output:

# There is no solution
# Assume the two input equations have no more than one solution.

# Note: Elegant mathematical techniques exist to solve such linear equations. However, for other kinds of equations or situations, brute force can be handy.

''' Read in first equation, ax + by = c '''
a = int(input())
b = int(input())
c = int(input())

''' Read in second equation, dx + ey = f '''
d = int(input())
e = int(input())
f = int(input())

x = 0
y = 0

for i in range(-10,11,1):
    for j in range(-10,11,1):
        if ((a * i) + (b * j) == c) and ((d * i) + (e * j) == f):
            x = i
            y = j
            
for k in range(-10,11,1):
    for l in range(-10,11,1):
        if ((a * k) + (b * l) == c) and ((d * k) + (e * l) == f):
            x = k
            y = l
            
if not x and not y:              # 0 is fasley-- newly learned (●'◡'●) 
    print('There is no solution')
else:
    print(f'x = {x} , y = {y}') 
