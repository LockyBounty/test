#Import library
import json

#Loading the json data as python dictionary
#Try typing "type(data)" in terminal after executing first two line of this snippet
data = json.load(open("data.json"))

#Function for retriving definition
def retrive_definition(word):
    return data[word]

continuer = 'y'

while continuer == 'y':

    word_user = input("Enter a word: ")

    print(retrive_definition(word_user))

    continuer = input('Continue? (y / n) ')