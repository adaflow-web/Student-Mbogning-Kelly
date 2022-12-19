# Create a note
def write_note(text):
    file = open("Diving_into_python/noteapp.txt", "a")
    file.write("----\n")
    file.write(text + "\n")
    file.close()

# Search through notes
def search(text):
    file = open("Diving_into_python/noteapp.txt")
    content = file.read()
    file.close()
    result = ""
    notes = content.split("----")

    for note in notes:
        if note.find(text) != -1:
            result += "\n----" + note

    if result == "":
        print("Nothing found!")
    else:
        print(result)

# Display menu
print("What do you want to do?")
print("Press 1 for adding a note")
print("Press 2 for searching your notes")
answer = input(": ")

# Execute task based on menu input
if answer == "1":
    print("Enter your note:")
    note = input().strip()
    write_note(note)
elif answer == "2":
    print("Enter the text to search:")
    text = input().strip()
    search(text)
else:
    print("Sorry! I didn't understand that")





# file = open("text2.txt")
# content = file.read()
# file.close()

# def notapp():
#     print("What do you want to do ? ")
#     user_input = input("Press 1 for adding a note or Press 2 for searching a note : ")
#     if user_input == "1":
#         user_note = input("Enter your note : ")
#         file = open("text2.txt", "a")
#         file.write(user_note)
#         file.close()
#     elif user_input == "2":
#         user_input = input("Enter the text to search: ")
#         file = open("text2.txt")
#         file.read()
#         file.close()
#         result = file.find(user_input)
#         print(result)
#     else:
#         print("Sorry you did not enter a number between 1 and 2")

# print(notapp())

# def ask_to_continue():
#     user_answer = input("Do you want to continue ? (y or n) ")
#     if user_answer == "y":
#         return True
#     else:
#         return False

# while ask_to_continue():
#     print(notapp())

