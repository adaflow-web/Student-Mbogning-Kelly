const para = document.getElementById("para")
const Text = document.getElementById("Text")
const adding = document.getElementById("add")
const last = document.getElementById("last")
const clearme = document.getElementById("clearme")
const first = document.getElementById("first")

function getStorage(){
    if (localStorage.length > 0){
        for (let i = 0; localStorage.length > i ; i++){
            const lineCode = document.createElement("p")
            let value = localStorage.getItem(i);
            lineCode.innerHTML = value;
            lineCode.className = "nice"
            para.appendChild(lineCode);
        }
    }
}

function addvalue(){
    const newParagraph = document.createElement("p")
    newParagraph.innerText = Text.value;
    newParagraph.className = "nice"
    para.appendChild(newParagraph)
    // Text.value = "";

    const element = document.getElementsByClassName("nice")
    let noElement = element.length;
    localStorage.setItem(noElement, Text.value)
    Text.value = "";
}
adding.addEventListener("click", addvalue)

// add.onclick = () => {
//     const user = {
//         nom: para.value

//     }
//     localStorage.setItem("nom", JSON.stringify(user))
// }

// adding.addEventListener("click", ("nom", Text.value))

// if (localStorage.getItem("") != null)

function remove(){
    const removeparagraph = document.getElementsByClassName("nice")
    if (removeparagraph.length > 0){
        para.removeChild(removeparagraph[0])

        localStorage.removeItem((removeparagraph.length))
    }
    // else{
    //     alert("There is nothing")
    // }
    
}
first.addEventListener("click",remove)

function remove1(){
    const removeparagraph1 = document.getElementsByClassName("nice")
    if (removeparagraph1.length > 0){
        para.removeChild(removeparagraph1[removeparagraph1.length-1])
    // } else{
    //     alert("There is no text")
    // }

        localStorage.removeItem((removeparagraph1.length - 1))
    
} }
last.addEventListener("click", remove1)

function clearA(){
    const removeparagraph2 = document.getElementsByClassName("nice")
    localStorage.clear()
    while (para.firstChild){
        para.removeChild(para.firstChild)
    }
    // if (removeparagraph2.length > 0){
    
    // } else{
    //     alert("There is no Text")
    // }
}
clearme.addEventListener("click", clearA)

clearme.onclick = () => {
    localStorage.clear();
    document.location.reload(); //permet de recharger la page 
}

// var pageInfo = {
//     para : para,
//     Text : Text,
//     adding : add,
//     last : last,
//     clearme : clearme,
//     first : first,
// }
// localStorage.setItem("pageInfo", pageInfo )

