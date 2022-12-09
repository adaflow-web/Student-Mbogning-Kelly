// celsius, chf, fcfa

var userInput = window.prompt("Which conversion ? (CelsiusToFarenheit / chfToFcfa / fcfaToChf)")

if (userInput == CelsiustoFarenheit){
    console.log(CelsiusConverter(userNumber))
}

else if ( userInput == chfToFcfa){
    console.log(chfConverter(userNumber))
}

else if (userInput == fcfaToChf){
    console.log(fcfaConverter(userNumber))
}

function CelsiusConverter(Celsius){
   var userQuestion = window.prompt("Which value do you want to convert ?")
   try{
   userNumber = Number(userQuestion);
}
   catch{
    console.log("Please enter a number");

   }
var fahr = (Celsius * 9/5) + 32;
var message = "The result is " + fahr.toString() + " Farenheint!";
return message;


}

function chfConverter(chf){
    var userQuestion = window.prompt("Which value do you want to convert ?")
    try{
    userNumber = Number(userQuestion);
 }
    catch{
     console.log("Please enter a number");
 
    }
 var fcfa = chf * 650;
 var message = "The result is " + fcfa.toString() + " FCFA!";
 return message;

}

function fcfaConverter(){
    var userQuestion = window.prompt("Which value do you want to convert ?")
    try{
    userNumber = Number(userQuestion);
 }
    catch{
     console.log("Please enter a number");
 
    }
 var chf = fcfa / 650;
 var message = "The result is " + chf.toString() + " CHF!";
 return message;

}
