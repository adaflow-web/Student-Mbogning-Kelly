import random
class Car:
    name = ""
    speed = 0
    color = ""
    weight = ""

    def __init__(self, name, speed, color, weight):
        self.name =name
        self.speed = speed
        self.color = color
        self. weight = weight

    def moove(self):
        print("Your " + self.name + " with " + self.color + " is not mooving") 
    
    def drive(self, speed):
        print("The " + self.name + " is driving at " + speed + " km/h")
    
    def jump(self):
        print("This car has a weight of " + str(self.weight) + " kg and a speed of " + str(self.speed) + " it can not jump")

Toyota = Car("Toyota","", "", "" )
Toyota.drive("80")

Range_Rover = Car("Range Rover", " ", " black", " ")
Range_Rover.moove()

Mercedes = Car("", "50", " ", " 100")
Mercedes.jump()

