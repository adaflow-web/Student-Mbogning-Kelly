const myText = document.getElementById("myTextBook");
const myButton = document.getElementById("myButton");
const hello = document.getElementById("hello");
const add = document.getElementById("add");
const textBox = document.getElementById("textBox")
const add2 = document.getElementById("add2")
const myButton2 = document.getElementById("myButton2")
const main = document.getElementById("main")
const buttonRemove = document.getElementById("buttonRemove")



function display(){
    const newParagraph = document.createElement("p");
    newParagraph.innerText = myText.value
    newParagraph.className = "beautifull"
    add.appendChild(newParagraph);

    // add.innerText = myText.value;
}
myButton.addEventListener("click", display)

function display1(){
    const paragraph = document.createElement("p");
    paragraph.innerText = textBox.value
    paragraph.className = "beautifull1"
    add2.appendChild(paragraph)
}
myButton2.addEventListener("click", display1)

// function removeTitle(){
//     main.removeChild(hello)
// }
// buttonRemove.addEventListener("click", removeTitle)

function removeadd(){
    const paragraphs = document.getElementsByClassName("beautifull");
    if (paragraphs.length > 0){
        add.removeChild(paragraphs[0])
    } else{
        alert ("There is nothing in the paragraph.")
    }
}
buttonRemove.addEventListener("click",removeadd)
