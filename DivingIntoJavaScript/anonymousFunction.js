
var multiply = function(x, y){
    return x * y;
}

var result = multiply(4, 2)
console.log(result)

// Using a function as a function parameter

function call(msgBefore, msgAfter, fn){
    console.log(msgBefore);
    fn();
    console.log(msgAfter)
}
function display(){
    console.log("Called inside the function")
}
call("Before", "After", display)

// Using anonymous function, we have :

function call(msgBefore, msgAfter, fn){
    console.log(msgBefore);
    fn();
    console.log(msgAfter);
}

call("Before", "After", function(){
    console.log("called inside the function !")
})

// Adding a value: splice() takes the position at which you want to add an element as its first parameter 
// but because splice() is also used to remove elements at a given position, the second parameter specifies
//  how many elements should be removed. When using splice() to insert elements, we simply set the second 
// parameter to 0.


var values = [13, "Hello", -5.6, "blue"];

values.push(100);
console.log(values);

values.unshift("ECMAScript");
console.log(values);

values.splice(1, 0, 65);
console.log(values);

// Removing a value
// Removing values is done with pop() to remove the last value in the array,
//  shift() to remove the first one and splice() to remove an element at a specified position:

var values = [13, "Hello", -5.6, "blue"];

var lastValue = values.pop();
console.log(lastValue);
console.log(values);

var firstValue = values.shift();
console.log(firstValue);
console.log(values);

var secondValue = values.splice(1, 1);
console.log(secondValue);
console.log(values);

// finding a value

// To find a specific value in an array, you use indexOf(). If the value is found, it will return its position. 
// If not, it returns -1. Much like the find() function that we've seen in Python. It is not uncommon for 
// a programming language to return -1  when something is not found. If several values are found, it always 
// return the first one in the array:

var values = ["Nick", "Robert", "Alice", "Julia", "Robert", "Sylvia"];

var julia = values.indexOf("Julia");
console.log(julia);

var jim = values.indexOf("Jim");
console.log(jim);

var robert = values.indexOf("Robert");
console.log(robert);

// merging

var firstTeam = ["Bob", "Jim"];
var secondTeam = ["Alice", "Julia"];

var bothTeams = firstTeam.concat(secondTeam);
console.log(bothTeams);
console.log(firstTeam);

// converting an array to a string

var colors = ["Blue", "Red", "Green"];

var colorString = colors.toString();
console.log(colorString);

colorString = colors.join(" - ");
console.log(colorString);

// converting a string to an array

var colorString = "Blue,Red,Green";
var colors = colorString.split(",");
console.log(colors);

// Sorting

var scores = [10, 1, 45, 7, 3];

var sortedScores = scores.sort();
console.log(sortedScores);

var reversedScores = scores.reverse();
console.log(reversedScores);

var scores = [10, 1, 45, 7, 3];

var sortedScores = scores.sort(function(a, b) {
    return a - b;
});

console.log(sortedScores);

// Adding a key value

var album = {
    band: "Nirvana",
    title: "Nevermind",
    year: 1991,
    tracks: 12
  }
  
  album.genre = "Grunge";
  album["producer"] = "Butch Vig";
  
  console.log(album);

//   removing a property and its value

var album = {
    band: "Nirvana",
    title: "Nevermind",
    year: 1991,
    tracks: 12
  }
  
  delete album.title;
  console.log(album);
  
