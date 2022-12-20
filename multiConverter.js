// celsius, chf, fcfa

// var question = window.prompt("Do you want to convert a value ? (yes or no)")

function askToContinue(){
    userAnswer = window.prompt("Do you want to convert a value ? (yes or no)")
    if(userAnswer != "yes" && userAnswer != "no"){
        alert("Please enter a valid word. yes or no");}
    else if (userAnswer == "yes"){
        return true;
}   else if(userAnswer == "no"){   
        return false;
}}


function CelsiusConverter(){
    var celsius = window.prompt("Which value do you want to convert ?")
    try{
        if ((isNaN(celsius) || celsius == "")){
            throw "You have not enter a number. Try again..."}
        else{
        var celsiusNumber = Number(celsius);}
     }
    catch{
        console.log("Please enter a number");
     
        }
    var fahr = (celsiusNumber * 9/5) + 32;
    var message = "The result is " + fahr.toString() + " Farenheint!";
    return message;
    }
     
function chfConverter(){
    var chf = window.prompt("Which value do you want to convert ?")
    try{
        if ((isNaN(chf)) || chf == ""){
            console.log("Vous n\'avez pas entre un nombre")
        } else{
            var chfNumber = Number(chf)
        }
        
      }
    catch{
        console.log("You have not enter a number. Try again...");}
      
         
    var fcfa = chfNumber * 650;
    var message = "The result is " + fcfa.toString() + " FCFA!";
    return message;
     
     }
     
function fcfaConverter(){
    var fcfa = window.prompt("Which value do you want to convert ?")
    try{
        if ((isNaN(fcfa)) || fcfa == ""){
            console.log("You have not entered a number. Please try again...")}
        else{
        var fcfaNumber = Number(fcfa);
      }}
    catch{
        alert("You have not entered a number");
      
         }
    var chf = fcfaNumber / 650;
    var message = "The result is " + chf.toString() + " CHF!";
    return message;}

while (askToContinue()){

    // while (userAnswer != "yes" && userAnswer != "no"){
    // //     // var question = window.prompt("Do you want to convert a value ? (yes or no)")
    //     console.log("Please select a valid word between yes or no")}
    // // // var question = window.prompt("Do you want to convert a value ? (yes or no)")

    //     if (userAnswer== "no"){
    // //     // question = "no"
    //         console.log("Thank you!")}

    //     else if(userAnswer == "yes"){
    // //     // question = "yes"

    var userInput = window.prompt("Which conversion ? (CelsiusToFarenheit / chfToFcfa / fcfaToChf)");

        // while(userInput != "CelsiusToFarenheit" && userInput != "chfToFcfa "  && userInput != "fcfaToChf "){


        //     console.log("Please select a valid conversion.");
        //     userInput = window.prompt("Which conversion ? (CelsiusToFarenheit / chfToFcfa / fcfaToChf)")}
       
    if ( userInput == "chfToFcfa"){
            // userInput = "chfToFcfa"
        console.log(chfConverter());
            
    }
    else if ( userInput == "CelsiustoFarenheit"){
            // userInput = "CelsiustoFarenheit"

        console.log(CelsiusConverter());
           
    }
    
    else if (userInput = "fcfaToChf"){
            // userInput = "fcfaToChf"
        console.log(fcfaConverter());
            
            }
    else {
        console.log("Sorry you did not enter a valid conversion type.")
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









// console.log("Thank you!!")
