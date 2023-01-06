// To save element in the local storage:
localStorage.setItem("age", "12")


// To get element from the local storage, we type:
const age = localStorage.getItem("age");
console.log(age);

// To remove all elements from the local storage:
// localStorage.clear();

// if we want to remove only one item,:
localStorage.removeItem("username")

// To read the value of the key that doesn't exist:
const val = localStorage.getItem("password")
console.log(val)