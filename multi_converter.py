def chf_to_fcfa(chf):
    return chf * 650

def celsius_to_farenheit(celsius):
    return (celsius * 9/5) + 32

def fcfa_to_chf(fcfa):
    return fcfa / 650

def ask_to_continue():
    user_answer = input("Do you want to convert a value ? (yes or no) ")
    if user_answer == "yes" :
        return True
    else:
        return False

def conversion_type():
    user_answer = input("What do you want to convert ? (chf_to_fcfa / celsius_to_farenheit / fcfa_to_chf")
    return conversion_type

def ask_the_value():
    user_value = input("Enter the value you want to convert :")
    try:
        user_number = int(user_value)
    except:
        print("You did not enter a number.")
        quit()
    return user_value

while ask_to_continue():
    user_answer = conversion_type()
    user_number = ask_the_value()
    result_message = "The result is "


    if user_answer == "chf_to_fcfa":
        result_message += str(chf_to_fcfa(user_number)) + " FCFA."

    elif user_answer == "celsius_to_farenheit":
        result_message += str(celsius_to_farenheit(user_number)) + " Farenheit."

    elif user_answer == "fcfa_to_chf":
        result_message += str(fcfa_to_chf(user_number)) + " CHF."

    else:
        result_message = " You did not enter a valid conversion type."

    print(result_message)
