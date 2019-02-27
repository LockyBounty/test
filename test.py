
import getpass
import hashlib

#Function for retriving definition
def retrive_definition(word):
    return data[word]

continuer = 'y'

while continuer == 'y':

    word_user = input("Enter a word: ")

    print(retrive_definition(word_user))

    continuer = input('Continue? (y / n) ')

