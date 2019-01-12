import random    #importe le module random pour utiliser random
import sys       #Pour utiliser module exit
import math		



print("\nJeu de la roulette")
print("==================")
print("Vous avez 100 euros en solde de jeu")
print("Chiffre exact = gain x 3")
print("Couleur exact = gain + 50%")
print("--Chiffre pair= noir\n--Chiffre impair = rouge\n ")
chiffre = input("Choisissez un chiffre entre 0 et 49 pour commencer : ")
chiffre = int(chiffre)
solde = 100  #solde fourni de base au jeu
mise = input("Entrez votre mise : ")
mise = int(mise)
gainNumero = 3
gainCouleur = 0.5 #50% de gains

randomization = 0

def couleurPair(nb):
    if  nb % 2 == 0 :
        return "Noir"
    else : 
        return "Rouge"

if chiffre > 49 or chiffre < 0 :
    print("Numéro incorrect, apprends à lire !")
    sys.exit() #Si erreur, sortie du code
   
randomization = random.randrange(49)#retourne une valeur entre 0-49 inclus
print("\nLa roulette s'est arrêtée à :", randomization, couleurPair(randomization))

if chiffre == randomization :
    solde = mise * gainNumero
    print("Chiffre exact, solde actuel :", solde)
elif couleurPair(chiffre) == couleurPair(randomization):
    solde = solde + mise*gainCouleur
    print("Vous gagnez à la couleur, solde actuel :", round(solde))
else : 
    solde = solde-mise
    print("Vous avez perdu votre mise, solde :", solde)
	
input("\nAppuyez sur Enter pour continuer...")



