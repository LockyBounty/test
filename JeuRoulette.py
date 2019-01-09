import random    #importe le module random pour utiliser random
import sys       #Pour utiliser module exit



print("\nJeu de la roulette")
print("==================")
print("Chiffre exact = gain x 3")
print("Couleur exact = gain + 50%")
print("--Chiffre pair= noir\n--Chiffre impair = rouge\n ")
chiffre = input("Choisissez un chiffre entre 0 et 49 pour commencer : ")
chiffre = int(chiffre)
mise = input("Entrez votre mise : ")
mise = int(mise)
solde = 0
gainNumero = 3
gainCouleur = 0.5


randomization = 0

def couleurPair(nb):
    if  nb % 2 == 0 :
        return "Noir"
    else : 
        return "Rouge"

if chiffre > 49 or chiffre < 0 :
    print("Numéro incorrect, apprends à lire !")
    sys.exit()
   
    


randomization = random.randrange(49)#retourne une valeur entre 0-49 inclus
print("\nLa roulette s'est arrêtée à :", randomization, couleurPair(randomization))


if chiffre == randomization :
    solde = mise * gainNumero
    print("Chiffre exact, solde actuel :", solde)
elif couleurPair(chiffre) == couleurPair(randomization):
    solde = mise + (mise*gainCouleur) 
    print("Vous gagnez à la couleur, solde actuel :", solde)
else : 
    solde = solde-mise
    print("Vous avez perdu votre mise, solde :", solde)



