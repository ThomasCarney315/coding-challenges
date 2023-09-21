import re
def word_frequency_counter(file_path, rm_common = False):
    """
    Counts the frequency of each word in a text document.

    Args:
        file_path (str): The path to the text document.

    Returns:
        dict: A dictionary where keys are words and values are their frequencies.
    """
    # Your code here
    word_counts = {}
    with open(file_path) as file:
        #handle one line at a time to minimize memory usage for very large files
        for line in file:
            words = line.lower()
            words = words.replace('\n', ' ')
            words = re.sub(r'[^a-z ]', '', words)
            if rm_common: 
                words = remove_common_stop_words(words)
            words = words.split(' ')
            #remove '' elements
            words = list(filter(lambda x: x, words))
            #update dictionary with word counts
            for word in words:
                if word in word_counts:
                    word_counts[word] += 1
                else:
                    word_counts[word] = 1
    if rm_common:
        print('With common stop curr ( "the", "and", "in") excluded:')
    return word_counts

def print_top_n_words(word_freq_dict, n):
    """
    Prints the top 'n' most frequent words.

    Args:
        word_freq_dict (dict): Dictionary containing word frequencies.
        n (int): Number of top words to print.
    """
    # Your code here
    sorted_counts = []
    for word in word_freq_dict:
        sorted_counts.append([word, word_freq_dict[word]])
    sorted_counts.sort(key=lambda x: x[1], reverse=True)
    for i in range(n):
        print(f'Word: {sorted_counts[i][0]}, Frequency: {sorted_counts[i][1]} ')
    print()
    

def remove_common_stop_words(str):
    return re.sub(r'\bthe\b|\band\b|\bin\b', '', str)



# Example Usage
file_path = 'sample_text.txt'
word_freq_dict = word_frequency_counter(file_path)
print_top_n_words(word_freq_dict, 10)
word_freq_dict = word_frequency_counter(file_path, True)
print_top_n_words(word_freq_dict, 10)