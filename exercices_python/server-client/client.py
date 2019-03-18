import socket

hote = 'localhost'
port = 8003

connexion_au_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

connexion_au_server.connect((hote, port))
print("Connexion avec le server établie au port {}.".format(port))


msg_a_envoyer = b""
while msg_a_envoyer != b"fin":
    msg_a_envoyer =input("> ")
    msg_a_envoyer = msg_a_envoyer.encode()
    connexion_au_server.send(msg_a_envoyer)
    msg_recu = connexion_au_server.recv(1024)
    print(msg_recu.decode())

print("fermeture de la connexion")
connexion_au_server.close()

