// celsius, chf, fcfa

var question = window.prompt("Do you want to convert a value ? (yes or no)")

if (question == "yes"){

    var userInput = window.prompt("Which conversion ? (CelsiusToFarenheit / chfToFcfa / fcfaToChf)");

    if (userInput == "CelsiustoFarenheit"){
        console.log(CelsiusConverter());
    }
    
    else if ( userInput == "chfToFcfa"){
        console.log(chfConverter());
    }
    
    else if (userInput == "fcfaToChf"){
        console.log(fcfaConverter());
    }

}

else{
    console.log("Thank you!! See you next time!!");
}





function CelsiusConverter(Celsius){
   var userQuestion = Number(window.prompt("Which value do you want to convert ?"))
//    try{
//    var userNumber = Number(userQuestion);
// }
//    catch{
//     console.log("Please enter a number");

//    }
var fahr = (Celsius * 9/5) + 32;
var message = "The result is " + fahr.toString() + " Farenheint!";
return message;


}

function chfConverter(chf){
    var userQuestion = Number(window.prompt("Which value do you want to convert ?"))
//     try{
//     var userNumber = Number(userQuestion);
//  }
//     catch{
//      console.log("Please enter a number");
 
//     }
 var fcfa = chf * 650;
 var message = "The result is " + fcfa.toString() + " FCFA!";
 return message;

}

function fcfaConverter(fcfa){
    var userQuestion = Number(window.prompt("Which value do you want to convert ?"))
//     try{
//     var userNumber = Number(userQuestion);
//  }
//     catch{
//      console.log("Please enter a number");
 
//     }
 var chf = fcfa / 650;
 var message = "The result is " + chf.toString() + " CHF!";
 return message;

}

console.log("Thank you!!")
