import random
class Cat:
    name = ""
    species = ""
    weight = "0"
    color = ""
tom = Cat()
print(tom)

class Human:
    name = ""
    height = ""
    weight = ""
    color = ""

    # Adding Method

    def cook(self):
        print(self.name + " is cooking")

    def play(self, sport, Sport_all):
        print(self.name + " is playing " + sport)
        print("With " + str(self.height) + " We can play " + Sport_all)

Brother = Human()
Brother.name = "Franck"
Brother.height = random.randint(100, 200 )
Brother.weight = 80
Brother.color = "Black"

Sister = Human()
Sister.name = "Abi"
Sister.height = 1.65
Sister.weight = 90
Sister.color = "white"

print(Brother)
print(Sister)

print(Brother.name + ":" + str(Brother.height))
print(Sister.name + ":" + str(Sister.height))

Sister.cook()
Brother.play("Football", "BasketBall")