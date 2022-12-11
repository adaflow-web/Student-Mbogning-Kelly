function chfToFcfa(chf){
    return chf * 650 ;
}

function celsiusToFarenheit(celsius){
    return (celsius * 9/5) + 32 ;
}

function fcfaToChf(fcfa){
    return fcfa / 650 ;
}

function askToContinue(){
    var userAnswer = window.prompt("Do you want to convert a value ? (yes or no) ")
    if (userAnswer == "yes"){
        return true;
    } else{
        return false;
    }
}

function askConversion(){
    var userAnswer = window.prompt("Which conversion ? (fcfaToChf / celsiusToFarenheit / chfToFcfa )")
    return userAnswer;
}

function askValue(){
    var userValue = window.prompt("Which value do you want to convert ?")
    return userValue
}


while(askToContinue()){
    var conversionType = askConversion();
    var conversionValue = askValue();
    var resultMessage = "The result is ";
    var resultValue = 0; 

    if (conversionType == "fcfaToChf"){
        resultMessage += (fcfaToChf(Number(conversionValue))) + " Chf.";
    } else if (conversionType == "celsiusToFarenheit"){
        resultMessage += (celsiusToFarenheit(Number(conversionValue))) + " Farenheit.";
    } else if (conversionType == "chfToFcfa"){
        resultMessage += (chfToFcfa(Number(conversionValue))) + " Fcfa.";
    } else {
        resultMessage = "Sorry, you did not enter a valid conversion type.";
    }
    console.log(resultMessage);
}