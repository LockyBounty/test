import getpass
import hashlib


#mdp = getpass.getpass("Tapez votre mot de passe : ")
mp = getpass.getpass("mot de passe : ")
mp1 = mp.encode()
mdp = hashlib.shake_256(mp1).hexdigest(233)
print(mdp)