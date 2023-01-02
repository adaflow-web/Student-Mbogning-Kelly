// // Person constructor function
// function Person(name) {
//     this.name = name;
//   }
  
//   // Add sayHi to the Person prototype
//   Person.prototype.sayHi = function() {
//     console.log(`Hello! I'm ${this.name}.`);
//   }
  
//   // Test a Person object
//   const lori = new Person("Lori");
//   lori.sayHi();

  
//   using a class, we have:

// Person class
class Person {
    constructor(name) {
      this.name = name;
      console.log("Hello")
    }
  
    // Add sayHi to the Person class
    sayHi() {
      console.log(`Hello! I'm ${this.name}.`);
      const andrea = new Person("Andrea");
    // console.log(lori.sayHi === andrea.sayHi);
    }
  }
  
  // Test a Person object
  const lori = new Person("Lori");
  lori.sayHi();
  const Lara = new Person("Lara")
  Lara.sayHi()
  