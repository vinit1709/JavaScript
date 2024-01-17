// singleton 
// Object.create

// Object literals 

const mySym = Symbol("key1")    // Declare Symbol

const JsUser = {
    name: "Vinit",
    "full name": "Vinit Patel",
    [mySym]: "mykey1",
    age: 20,
    location: "Dholka",
    email: "vinit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// there is two way to display objects values
// console.log(JsUser.email);          // First one
// console.log(JsUser["email"]);       // Secound one

//But u can't access full name values using First one method.
// console.log(JsUser["full name"]);  
// console.log(JsUser[mySym]);

JsUser.email = "vinit@chatgpt.com"
// Object.freeze(JsUser)   
// after applying freeze operation you can't change value!!
JsUser.email = "vinit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// ***************** singleton ************

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vinit",
            lastname: "patel"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// optional chaning..
// console.log(regularUser.fullname?.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)  //  assign operation use to marge to object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 2,
        email: "hii@gmail.com"
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "vinit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // Objects distructure..

// console.log(courseInstructor);
// console.log(instructor);


// *************** APIS *************

// JSON Formate Apis.
// {
//     "name": "vinit",
//     "coursename": "JavaScript",
//     "price": "Free"
// }
