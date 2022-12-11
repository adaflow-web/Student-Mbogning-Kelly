var a = Math.random()*100;
var userGuess = Math.floor(a) + 1;

var userWins = true;
var attemps = 0;

while (userWins != false){
    userInput = window.prompt("Enter the secret number between 1 and 101: ");

    try {
        var userNumber = Number(userInput);
    }
    catch{
        console.log("You did not enter a number.")
    }
    if (userNumber == userGuess){
        userWins = false;
    } else if (userNumber > userGuess){
        console.log("The secret value is smaller than this one.")
    } else if (userNumber < userGuess){
        console.log("The secret value is bigger than this one. ")
    }
    attemps += 1;}

if (attemps == 1){
    var attempWord = " attemp";
} else{
    var attempWord = " attemps"
}

console.log("You won!!! You took " + attemps.toString() + attempWord);
