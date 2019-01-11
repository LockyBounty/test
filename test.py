import pickle

with open('donnees', 'rb') as fichier:
    monDepickler = pickle.Unpickler(fichier)

    scoreRecup = monDepickler.load()
    print(scoreRecup)