# Complete the following program using functions from the table above to find some statistics about basketball player Lebron James. The code below provides lists of various statistical categories for the years 2003-2013. Compute and print the following statistics:

# Total career points
# Average points per game
# Years of the highest and lowest scoring season
# Use loops where appropriate.


#Lebron James: Statistics for 2003/2004 - 2012/2013
games_played = [79, 80, 79, 78, 75, 81, 76, 79, 62, 76]
points = [1654, 2175, 2478, 2132, 2250, 2304, 2258, 2111, 1683, 2036]
assists = [460, 636, 814, 701, 771, 762, 773, 663, 502, 535]
rebounds = [432, 588, 556, 526, 592, 613, 554, 590, 492, 610]

# Print total points
print(f'Total points: {sum(points)}')

# Print Average PPG
print(f'Avg PPG: {sum(points) / sum(games_played)}')

# Print best scoring years (Ex: 2004/2005)
best = 0
best_year = 0
for year, score in enumerate(points, 2003):
    if score > best:
        best = score
        best_year = year
print(f'Best scoring years: {best_year}/{best_year + 1}')

# Print worst scoring years (Ex: 2004/2005)
worst = 0
worst_year = 0
for year, score in enumerate(points, 2003):
    if not worst_year:
        worst_year = year
        worst = score
    if score < worst:
        worst = score
        worst_year = year
print(f'Worst scoring years: {worst_year}/{worst_year + 1}')