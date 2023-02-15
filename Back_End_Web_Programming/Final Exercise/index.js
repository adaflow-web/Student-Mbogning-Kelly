const del = document.getElementById("delete")
const para = document.getElementById("para")

function clearA(){
    // const removeparagraph2 = document.getElementsByClassName("nice")
    while (para.firstChild){
        para.removeChild(para.firstChild)
    }
    // if (removeparagraph2.length > 0){
    
    // } else{
    //     alert("There is no Text")
    // }
}
del.addEventListener("click", clearA)
