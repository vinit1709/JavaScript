const user = {
    userName: "vinit",
    price: 999,

    welcomeMsg: function() {
        // this keyword refer currunt context
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.userName = "sam"
// user.welcomeMsg()

// console.log(this);

// function chai() {
//     console.log(this);
// }

// chai()

// *************** Arrow Functions *******************

// const chai = () => {
//     let userName = "vinit"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)   // this is most use in react js

const addTwo = (num1, num2) => ({userName: "vinit"})  

// console.log(addTwo(3, 4));

// const myArray = [1, 2, 3, 4,]
