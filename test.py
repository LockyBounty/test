class Personne:
    def __init__(self, nom, prenom):
        self.nom = nom
        self.prenom = prenom
        self.age = 33
        self._lieu = "Bruxelles"
    def _get_lieu(self):
        return self._lieu
    def _set_lieu(self, new_lieu):
        print("Nouvelle résidence :", new_lieu)
        self._lieu = new_lieu
    lieu = property(_get_lieu, _set_lieu)


locky = Personne("bounty", "locky")

locky.lieu = "Amsterdam"

#locky.lieu

