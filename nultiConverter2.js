function chfToFcfa(chf){
    return chf * 650 ;
}

function CelsiusToFarenheit(celsius){
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
    var userAnswer = window.prompt("Which conversion ? (fcfaToChf / CelsiusToFarenheit / chfToFcfa )")
    return userAnswer;
}

function askValue(){
    var userValue = window.prompt("Which value do you want to convert ?")
    return userValue
}