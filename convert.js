console.log("Hello! I hope you are fine");
console.log("Please help me to convert 18.5 celsius to farenheit.");
function tempConvert(celsius){
    var fahr = (celsius * 9/5) + 32;
    message = celsius.toString() + " degrees celsius are " + fahr.toString() + " degrees farenheit";
    return message;
}
console.log(tempConvert(18.5));
console.log("Thanks!");