import random

secret_number =random.randint(1, 101)
user_wins = False
attemps = 0

while user_wins != True:          #Loop of the game

    User_input = input("Enter the secret number between 1 and 100 : ")    # Get user input

    # Try user input
    try:
        user_number = int (User_input)
    except:
        print("Error! you need to enter a number. ")
        quit()

    attemps += 1           # increase attemps count

    if user_number == secret_number:     # check the user_number against the secret number
        user_wins = True
    elif user_number > secret_number:
        print("The secret number is smaller")
    else:
        print("The secret number is bigger")

if attemps == 1:           # get the spelling of the attemp word
    attemp_word = " attemp"
else:
    attemp_word = " attemps"

print("You won!!! You took " + str(attemps) + attemp_word)
         
        

# Number_guess = 51
# def guess():
#     User_input = input("Enter a number: ")
#     try:
#         result = int(User_input) 
#     except:
#         return "Sorry you have not enter a number"
#         quit()
#     if result == Number_guess:
#         return "Good job! You won the game in"
#     elif result < Number_guess:
#         return "The secret Number is bigger"
#     elif result > Number_guess:
#         return "The secret number is smaller"
# print(guess())
