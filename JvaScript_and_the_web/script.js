const title = document.getElementById("title")
console.log(title)
const myButton = document.getElementById("myButton")
console.log(myButton)
const nonexisting = document.getElementById("nonExisting")
// console.log(nonexisting)

const myText = document.getElementById("myText")

const paragraph = document.getElementsByTagName("p")

if (nonexisting == null){
    console.log("This element does not exist.")
} else{
    console.log(nonexisting)
}

// const paragraph = document.getElementsByClassName("paragraph")
// console.log(paragraph)

for (let i = 0; i < paragraph.length; i++) {
    // const element = paragraph[i];
    console.log(paragraph[i])
}


// title.innerHTML = "The title has changed." 
// It is for all the tasks that can open and close. exple h1, h2, ...

// title.innerText = "<span>The title</span> has n changed"

// myButton.value = "This has changed too."
// This one is for all tasks that can not open and close, exple: button, 

// myText.value = "This is a new value"
// myText.innerHTML = "This is a new value"

// function changeTitle(){
//     title.innerText = "New title";
// }
// myButton.addEventListener("click", changeTitle);
// to double click, we use dbclick

function changeTitle(){
    title.innerText = myText.value
}
myButton.addEventListener("click", changeTitle);