# text_file = open ("Diving_into_python/address_book.txt")
# # content = text_file.read()
# for line in text_file:
#     print(line)

# # print(content)

# text_file.close()

file = open("text2.txt", "w")
file.write("Hey")
file.close()

file1 = open("kk.txt", "w")
file1.write("Hello")
file1.close()

file2 = open("kk.txt", "a")
file2.write("\nHow are you?")
file2.close()
