// celsius, chf, fcfa

// var question = window.prompt("Do you want to convert a value ? (yes or no)")

while (question != "yes" && question != "no"){
    // var question = window.prompt("Do you want to convert a value ? (yes or no)")
    console.log("Please select a valid word between yes or no")
    var question = window.prompt("Do you want to convert a value ? (yes or no)")

    if (question == "no"){
        question = "no"
        console.log("Thank you!")}

    else if(question == "yes"){
        question = "yes"

        var userInput = window.prompt("Which conversion ? (CelsiusToFarenheit / chfToFcfa / fcfaToChf)");

        while(userInput != "CelsiusToFarenheit" && userInput != "chfToFcfa "  && userInput != "fcfaToChf "){


            console.log("Please select a valid conversion.");
            userInput = window.prompt("Which conversion ? (CelsiusToFarenheit / chfToFcfa / fcfaToChf)")}
       

        if (userInput == "CelsiustoFarenheit"){
            userInput = "CelsiustoFarenheit"

            console.log(CelsiusConverter());
    }
    
        else if ( userInput == "chfToFcfa"){
            userInput = "chfToFcfa"
            console.log(chfConverter());
    }
    
        else if (userInput = "fcfaToChf"){
            userInput = "fcfaToChf"
            console.log(fcfaConverter());
    }
}
  
    }
// console.log("Thank you!");


    

    

//     var userInput = window.prompt("Which conversion ? (CelsiusToFarenheit / chfToFcfa / fcfaToChf)");

//     if (userInput == "CelsiustoFarenheit"){
//         console.log(CelsiusConverter());
//     }
    
//     else if ( userInput == "chfToFcfa"){
//         console.log(chfConverter());
//     }
    
//     else if (userInput == "fcfaToChf"){
//         console.log(fcfaConverter());
//     }

// }

// else{
//     console.log("Please select a word between yes or no ");
// }





function CelsiusConverter(celsiusNumber){
   var celsius = window.prompt("Which value do you want to convert ?")
   try{
   var celsiusNumber = Number(celsius);
}
   catch{
    console.log("Please enter a number");

   }
    var fahr = (celsiusNumber * 9/5) + 32;
    var message = "The result is " + fahr.toString() + " Farenheint!";
    return message;


}

function chfConverter(chfNumber){
    var chf = window.prompt("Which value do you want to convert ?")
    try{
    var chfNumber = Number(chf);
 }
    catch{
     console.log("Please enter a number");
 
    }
    var fcfa = chfNumber * 650;
    var message = "The result is " + fcfa.toString() + " FCFA!";
    return message;

}

function fcfaConverter(fcfaNumber){
    var fcfa = window.prompt("Which value do you want to convert ?")
    try{
    var fcfaNumber = Number(fcfa);
 }
    catch{
     console.log("Please enter a number");
 
    }
    var chf = fcfaNumber / 650;
    var message = "The result is " + chf.toString() + " CHF!";
    return message;

}

// console.log("Thank you!!")
