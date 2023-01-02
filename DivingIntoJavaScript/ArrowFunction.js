// function sayHello(to) {
//     console.log(`Hello ${to}`);
//   }

// //   Using the arrow syntax
// const sayHello = (to) => {
//     return `Hello ${to}`;
//   }

//   When there's only one parameter passed to the function, we can omit the parenthesis:
// const sayHello = to => {
//     return `Hello ${to}`;
//   }

// It doesn't stop there. For functions where the body consists of only one statement, you 
// can also remove the curly braces and the return keyword. The return statement is implicit:
  const sayHello = to => `Hello ${to}`;

  console.log(sayHello("Sasha"));

// For functions with 0 or more than one parameter, you need to keep the parenthesis
const add = (x, y) => x + y;
 console.log(add(3, 2));

 const displayMsg = () => console.log("Hey");

 displayMsg();

// If your function has more than one statement in its body, you have to keep the curly braces:
const sayHi = to => {
    const msg = `Hello ${to}.`;
    console.log(msg);
  }
  
  sayHi('Tyreese');

  
// The strange case of binding this
// const person = {
//     firstName: 'Daryl',
//     friends: [
//       'Rick',
//       'Michonne',
//       'Glenn'
//     ],
//     showFriends: function() {
//       function formatString(friendName) {
//         return `${friendName} is a friend of ${this.firstName}`
//       }
//       for (let i = 0; i < this.friends.length; i++) {
//         console.log(formatString(this.friends[i]));
//       }
//     }
//   }
// person.showFriends();

// To fix the undifined, we do:

// showFriends: function(){
//     const that = this;
//     function formatString(friendName){
//         return ${friendName} is a friend of ${that.firstName}
//     }
//     for (let i =0; i<this.friendName.length; i++){
//         console.log(formatString(this.friend[i]));
//     }

// }


// Using arrow function syntax inside inner functions
const person = {
    firstName: 'Daryl',
    friends: [
      'Rick',
      'Michonne',
      'Glenn'
    ],
    showFriends: function() {
      const formatString = friendName => `${friendName} is a friend of ${this.firstName}`;
  
      for (let i = 0; i < this.friends.length; i++) {
        console.log(formatString(this.friends[i]));
      }
    }
  }
  
  person.showFriends();
  
  
