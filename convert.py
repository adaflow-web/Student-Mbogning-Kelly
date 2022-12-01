def converter(cfa):
    if cfa < 0:
       print("This is a negative value")
    else:
        euro = cfa / 650
        message = "The conversion from " + str(cfa) + " CFA is " + str(euro) + " Euro"
        return message
user_input = float(input ("Enter your amount in cfa: "))
print(converter(user_input))
if user_input >= 100000:
   print("This is a lot of money")

user_input = float(input("Enter a number between 1 and 10: "))
if 1 <= user_input <=10:
   print("You win.")
else:
    print("You lose.")
print("Try to play again.")
print("Bye Bye!")