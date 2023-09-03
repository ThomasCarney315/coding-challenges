Finding the first and last occurrence of a value (doubly-linked list)


Given main.py and a PersonNode class, complete the PersonList class by writing find_first() and find_last() methods at the end of the PersonList.py file. The find_first() method should find the first occurrence of an age value in the linked list and return the corresponding node. Similarly, the find_last() method should find the last occurrence of the age value in the linked list and return the corresponding node. For both methods, if the age value is not found, None should be returned. The program will replace the name value of each found node with a new name.

Ex. If the input is:

Alex 23
Tom 41
Michelle 34
Vicky 23
-1
23
Connor
34
Michela


the output is:

List before replacing:
Alex, 23
Tom, 41
Michelle, 34
Vicky, 23

List after replacing the first occurrence of 23:
Connor, 23
Tom, 41
Michelle, 34
Vicky, 23

List after replacing the last occurrence of 34:
Connor, 23
Tom, 41
Michela, 34
Vicky, 23