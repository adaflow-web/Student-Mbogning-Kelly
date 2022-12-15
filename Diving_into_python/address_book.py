text_file = open ("Diving_into_python/address_book.txt")
# content = text_file.read()
for line in text_file:
    print(line)

# print(content)

text_file.close()