class School:
    name = ""
    students = ""

    def study(self):
        print("At " + self.name + " we are doing programming with  " + self.students )

    def Town(self):
        print("PowerHouse is based in " + self.name)

    
    def __init__(self, name, students):
        self.name = name
        self.students = students

PowerHouse = School("PowerHouse", "Lily")
PowerHouse.study()

Lausanne = School("Lausanne", " ")
Lausanne.Town()
