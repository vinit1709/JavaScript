function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let res = number1 + number2
    // return res

    return number1 + number2
}


const result = addTwoNumbers(5, 4)

// console.log("Result: ",result);


function loginUserMsg(username = "defult") {
    return `${username} just logged in`
}

// console.log(loginUserMsg("vinit"))
// console.log(loginUserMsg())

// passing multiple arguments in one time
function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(100, 400, 500, 200));

const user = {
    username: "vinit",
    price: 200
}

function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "rudra",
    price: 299
})

const myNewArray = [200, 400, 100, 500]

function returnSecoundValue(getArray) {
    return getArray[1]
}

// console.log(returnSecoundValue(myNewArray));
// console.log(returnSecoundValue([200, 6000, 200]));