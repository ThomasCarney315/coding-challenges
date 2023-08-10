# Tiny Sales Company: Phase 1
# (1) Build the ItemToPurchase class with the following specifications:

# Attributes (3 pts)
# item_name (string)
# item_price (float)
# item_quantity (int)
# Default constructor (1 pt)
# Initializes item's name = "none", item's price = 0, item's quantity = 0
# Method
# print_item_cost()

# Ex. of print_item_cost() output:

# Bottled Water 10 @ $1 = $10
# (2) In the main section of your code, prompt the user for two items and create two objects of the ItemToPurchase class. (2 pts)

# Ex:

# Item 1
# Enter the item name:
# Chocolate Chips
# Enter the item price:
# 3
# Enter the item quantity:
# 1

# Item 2
# Enter the item name:
# Bottled Water
# Enter the item price:
# 1
# Enter the item quantity:
# 10

# (3) Add the costs of the two items together and output the total cost. (2 pts)

# Ex:

# TOTAL COST
# Chocolate Chips 1 @ $3 = $3
# Bottled Water 10 @ $1 = $10

# Total: $13

# Type code for classes here
class ItemToPurchase:
    def __init__(self, name = 'none', price = 0, qty = 0):
        self.item_name = name
        self.item_price = price
        self.item_quantity = qty
    def print_item_cost(self):
        total_cost = self.item_price * self.item_quantity
        print(f'{self.item_name} {self.item_quantity} @ ${self.item_price} = ${total_cost}')
    def get_total_cost(self):
        return self.item_price * self.item_quantity

if __name__ == "__main__":
    # Type main section of code here
    print('Item 1')
    name = input('Enter the item name:\n')
    price = int(input('Enter the item price:\n'))
    qty = int(input('Enter the item quantity:\n'))
    item1 = ItemToPurchase(name,price,qty)
    
    print('\nItem 2')
    name = input('Enter the item name:\n')
    price = int(input('Enter the item price:\n'))
    qty = int(input('Enter the item quantity:\n'))
    item2 = ItemToPurchase(name,price,qty)
    
    print('\nTOTAL COST')
    item1.print_item_cost()
    item2.print_item_cost()
    print(f'\nTotal: ${item1.get_total_cost() + item2.get_total_cost()}')