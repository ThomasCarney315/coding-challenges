You are tasked with writing a Python program that analyzes a text document and returns the frequency of each word in the document. The program should also be able to handle large documents efficiently.

Requirements:

    The word_frequency_counter function should read the text from the provided file path and return a dictionary where keys are words and values are their frequencies.
    Words should be considered case-insensitive. For example, "The" and "the" should be treated as the same word.
    The program should remove punctuation marks from the words. For example, "hello!" and "hello" should be considered the same word.
    The program should be able to handle large documents efficiently without running out of memory.
    The print_top_n_words function should print the top 'n' most frequent words along with their frequencies.

Example:

If the content of sample_text.txt is:

The quick brown fox jumps over the lazy dog.
The dog barks loudly as the fox jumps.


The output of print_top_n_words(word_freq_dict, 5) should be:

Word: the, Frequency: 4
Word: jumps, Frequency: 2
Word: fox, Frequency: 2
Word: dog, Frequency: 2
Word: quick, Frequency: 1

Bonus (optional):

Implement a way to exclude common stop words (e.g., "the", "and", "in") from the word frequency count.

This challenge tests your ability to work with files, string manipulation, dictionaries, and handling potentially large datasets efficiently.