def calculateur_frais_de_port():
    user_command = input("Quel est le momtant de votre commande ? : ")
    pays = input("Quel est votre pays de livraison? (CH, FR, DE, AU, autre) : ")

    try:
        command = int(user_command)
    except:
        print("Vous n'avez pas encore un nombre... Veuillez reessayer")
        quit()

    if pays == "FR" or pays == "DE":
        if command <= 100:
            frais = 10
            print("Frais sont egaux a 10%")
        elif  100< command <= 1000:
            frais = 5
            print("Frais sont egaux a 5%")
        elif command > 1000:
            frais = 1
            print("Frais sont egaux a 1%")
        monnaie = " Euro"
    
    elif pays == "CH":
        if command <= 100:
            print("Les frais sont egaux a 5%")
            frais = 5
        elif 100< command <= 1000:
            print("Frais sont egaux a 2%")
            frais = 2
        elif command > 1000:
            print("Frais sont egaux a 0%")
            frais = 0
        monnaie = "CHF"

    elif pays == "AU":
        if command <= 100:
            print("Frais sont egaux a 8%")
            frais = 8
        elif 100 < command <= 1000:
            print("Frais sont egaux a 6%")
            frais = 6
        elif command > 1000:
            print("Frais sont egaux a 4%")
            frais = 4
        monnaie = "Euro"

    else:
        if command <= 100:
            print("Frais sont egaux a 12%")
            frais = 12
        elif 100 < command <= 1000:
            print("Frais sont egaux a 10%")
            frais = 10
        elif command > 1000:
            print("Frais sont egaux a 8%")
            frais = 8
        monnaie= "Euro"

    total = command + command*frais / 100
    message = "le montant total est : " + str(total) + monnaie
    return message

def ask_to_continue():
    user_answer = input("Souhaitez-vous calculer de nouveau vos frais de port ? (oui ou non) ")
    if user_answer == "oui":
        return True
    else:
        return False

print(calculateur_frais_de_port())

while ask_to_continue():
    print(calculateur_frais_de_port())

            

         
