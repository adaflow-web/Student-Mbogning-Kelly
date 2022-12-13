function calculateur_frais_de_port(){
    var user_command = window.prompt("Quel est le momtant de votre commande ? : ")
    var pays = window.prompt("Quel est votre pays de livraison? (CH, FR, DE, AU, autre) : ")

    try{
        var command = Number(user_command);}
    catch{
        console.log("Vous n'avez pas encore un nombre... Veuillez reessayer");
        quit();}

    if (pays == "FR" || pays == "DE"){
        if (command <= 100){
            frais = 10;
            console.log("Frais sont egaux a 10%")}
        else if  (100< command <= 1000){
            frais = 5;
            console.log("Frais sont egaux a 5%");}
        else if (command > 1000){
            frais = 1;
            console.log("Frais sont egaux a 1%")}
        monnaie = " Euro"}
    
    else if( pays == "CH"){
        if (command <= 100){
            console.log("Les frais sont egaux a 5%");
            frais = 5;}
        else if (100< command <= 1000){
            console.log("Frais sont egaux a 2%");
            frais = 2;}
        else if (command > 1000){
            console.log("Frais sont egaux a 0%");
            frais = 0;}
        monnaie = "CHF";}

    else if (pays == "AU"){
        if (command <= 100){
            console.log("Frais sont egaux a 8%");
            frais = 8;}
        else if (100 < command <= 1000){
            console.log("Frais sont egaux a 6%");
            frais = 6;}
        else if (command > 1000){
            console.log("Frais sont egaux a 4%");
            frais = 4;}
        monnaie = "Euro";}

    else{
        if (command <= 10){
            console.log("Frais sont egaux a 12%");
            frais = 12;}
        else if (100 < command <= 1000){
            console.log("Frais sont egaux a 10%");
            frais = 10;}
        else if (command > 1000){
            console.log("Frais sont egaux a 8%");
            frais = 8;}
        monnaie= "Euro"}

    var total = command + command*frais / 100;
    var message = "le montant total est : " + total.toString() + monnaie
    return message;}

function ask_to_continue(){
    user_answer = window.prompt("Souhaitez-vous calculer de nouveau vos frais de port ? (oui ou non) ")
    if (user_answer == "oui"){
        return true;}
    else{
        return false;}
        }

console.log(calculateur_frais_de_port());

while (ask_to_continue()){
    print(calculateur_frais_de_port());
}