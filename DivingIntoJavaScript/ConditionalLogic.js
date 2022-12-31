// switch

var day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("It's the weekend!");
}

var day = 4;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Week day");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Not a valid day");
}

// Ternary operator

/* <condition> ? <value if true> : <value if false></value> */

var hour = 9;
var timeOfDay = '';

timeOfDay = hour < 12 ? 'before lunch' : 'after lunch';

console.log(timeOfDay);

// For loop

var people = [
    "Tim",
    "Jony",
    "Angela",
    "Craig"
  ];
  
  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    console.log(i + ". " + person);
  }

//   while loop

var people = [
    "Tim",
    "Jony",
    "Angela",
    "Craig"
  ];
  
  var i = 0;
  while (i < people.length) {
    var person = people[i];
    console.log(i + ". " + person);
    i++; // Don't forget to increment the index
         // or you'll create an infinite loop!
  }

//   For ...in

var album = {
    band: "Nirvana",
    title: "Nevermind",
    year: 1991,
    tracks: 12
  }
  
  for (var key in album) {
    console.log(key + ": " + album[key]);
  }

// Particular case of equality in JavaScript
var string = "42";
var number = 42;

    // Returns true because the values are equal
console.log(string == number);

    // Returns false because the data types are not the same
console.log(string === number);

// typeof "three" === typeof "four" 
// typeof "three" === typeof 4


// Adding method to an object

var person = {
    name: "Bob",
    age: 27,
    sayHi: function() {
      console.log("Hi. I'm Bob.");
    }
  }
  
  // Calling the sayHi method on the person object
  person.sayHi();


//   Using this
var person = {
    name: "Bob",
    age: 27,
    sayHi: function() {
      console.log("Hi. I'm " + this.name + ".");
    }
  }
  
  person.sayHi();

  
  var person = {
    name: "Bob",
    age: 27,
    sayHi: function() {
      console.log("Hi. I'm " + this.name + ".");
    },
    callMe: function() {
      console.log(this);
    }
  }
  
  person.callMe();

  
// Call one, call two, call many

// Represent an enemy
var enemy = {
    healthPoints: 150,
    strength: 20,
    threaten: function() {
      console.log("I'm going to destroy you!");
    },
    callForHelp: function() {
      console.log("Come help me!");
    }
  }
  
  // The enemy threaten the player
  enemy.threaten();
  
  // The enemy calls for more baddies to the rescue
  enemy.callForHelp();

  
// Represent an enemy
var enemy = {
    healthPoints: 150,
    strength: 20,
    threaten: function() {
      console.log("I'm going to destroy you!");
    },
    callForHelp: function() {
      console.log("Come help me!");
    }
  }
  
  // Represent a second enemy
  var enemyTwo = {
    healthPoints: 150,
    strength: 20,
    threaten: function() {
      console.log("I'm going to destroy you!");
    },
    callForHelp: function() {
      console.log("Come help me!");
    }
  }
  
  // Represent a third enemy
  var enemyThree = {
    healthPoints: 150,
    strength: 20,
    threaten: function() {
      console.log("I'm going to destroy you!");
    },
    callForHelp: function() {
      console.log("Come help me!");
    }
  }

  
// Constructor function

function Enemy(healthPoints, strength) {
    this.healthPoints = healthPoints;
    this.strength = strength;
    this.threaten = function() {
      console.log("I'm going to destroy you!");
    }
    this.callForHelp = function() {
      console.log("Come help me!");
    }
  }
  
  var meenie = new Enemy(150, 20);
  var miny = new Enemy(160, 15);
  var moe = new Enemy(110, 30);
  
  meenie.callForHelp();
  console.log("Moe has " + moe.healthPoints + " health points.");
  miny.threaten();
  
  console.log(meenie);

  
// Sharing method

// function Person(name){
//     this.name = name;
//     this.sayHello = function(){
//         console.log("Hello! I'am " + this.name)
//     }
// }
// var Sonia = new Person("Sonia")
// var Pearl = new Person("Pearl")

// Sonia.sayHello();
// Pearl.sayHello();

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function() {
    console.log("Hello! I am " + this.name);
  }
  
  var maggie = new Person("Maggie");
  var glenn = new Person("Glenn");
  
  // Check that it still works
  maggie.sayHello();
  
  // Check that the method is now shared
  console.log(maggie.sayHello === glenn.sayHello);
  

