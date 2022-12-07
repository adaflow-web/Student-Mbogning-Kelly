Number_guess = 51
def guess():
    User_input = input("Enter a number: ")
    try:
        result = int(User_input)
    except:
        return "Sorry you have not enter a number"
        quit()
    if result == Number_guess:
        return "Good job! You won the game in"
    elif result < Number_guess:
        return "The secret Number is bigger"
    elif result > Number_guess:
        return "The secret number is smaller"
print(guess())



print()
