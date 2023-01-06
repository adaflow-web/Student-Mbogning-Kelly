const welcome = document.getElementById("welcome");
const button = document.getElementById("button");
const Text = document.getElementById("Text")
const buttonRemove = document.getElementById("buttonRemove") 
const Add = document.getElementById("Add")

const paragraph = document.createElement("p")
    paragraph.innerText = Text.value

function add(){
    const paragraph = document.createElement("p")
    paragraph.innerText = Text.value
    paragraph.className = "modif"
    Add.appendChild(paragraph)
}
button.addEventListener("click",add)

function remove(){
    const paragraphs = document.getElementsByClassName("modif")
    if (paragraphs.length > 0){
        Add.removeChild(paragraphs[paragraphs.length-1])
    } else{
        alert("There is no text")
    }

}
buttonRemove.addEventListener("click", remove)