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
  
