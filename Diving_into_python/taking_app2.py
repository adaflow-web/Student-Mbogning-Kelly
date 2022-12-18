print("What do you want to do ?")
print("Press 1 for adding a note. ")
print("Press 2 for searching a note. ")
user_input = input(": ")


    

def write_note(text):
    file = open("Diving_into_python/note.txt", "a")
    # file.write("\n")
    file.write(text + "\n")
    file.close()


def searh(text):
    file = open("note.txt")
    content = file.read()
    file.close()
    result = ""
    notes = content.split("...")

    for note in notes:
        if note.find(text) != -1:
            result = result + "\n" + note

    if result == "":
        print("Nothing found")
    else:
        print(result)

if user_input == "1":
    user_note = input("Enter your note: ")
    user_note = user_note.strip()
    write_note(user_note)

elif user_input == "2":
    user_note = input("Enter the text to search: ")
    user_note_strip = user_note.strip()
    searh(user_note_strip)

else:
    print("Sorry, you did not press 1 or 2 ")





# # def user_note(user_text):
# file = open("Diving_into_python/app.txt", "w")
# file.write("Good Day ! \n")
# # file.write(user_text + "\n")
# # content = file.read()
# # print(content)
# file.close()

# print("What do you want to do ?")
# print("Press 1 for adding a note. ")
# print("Press 2 for searching a note. ")

# def app():
#     user_input = input(": ")
#     if user_input == "1":
#         user_note = input("Enter your note: ")
#         file = open("Diving_into_python/app.txt", "a")
#         file.write ( user_note + "\n")
#         file.close()

#     elif user_input == "2":
#         user_note = input("Enter the text to search: ")
#         file = open("Diving_into_python/app.txt")
#         content = file.read()
#         file.close()
        

#         for note in content:
#             if note.find(user_note) != -1:
#                 result = user_note + "\n" + note
#                 print(result)
#             # else:
#             #     print("Nothing found. ")
#         if user_note == "":
#             print("Nothing enter. ")
#         # else:
#         #     print(result)
        
        
#     print(app())




