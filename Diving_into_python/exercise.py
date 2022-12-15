text_file = open("Diving_into_python/exercise.txt")
content = text_file.read()
# for line in text_file:
#     print(line)
text_file.close()

new_text1 = content.replace("\n", " ").replace("-", "").replace(".", "").replace("*", "").replace("!", "").replace(",", "").replace("  ", "").replace("'", "").strip()

# print(new_text1)

number_of_words = len(new_text1.split(" "))
print(number_of_words)
print(new_text1.split(" "))

new_text = content.replace("is", "should be").upper()
print(new_text)

# new_text = new_text1.replace("is", "should be").upper()
# print(new_text)

