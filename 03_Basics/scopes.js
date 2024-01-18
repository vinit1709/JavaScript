// Scope mens {}

var c = 500
let a = 200

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner A : ",a);
    // console.log("Inner C : ",c);
}

// console.log(a);
// console.log(b);
// console.log(c);        // so i suggest dont use var to declare variable.

function one() {
    const username = "vinit"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "vinit"
    if (username === "vinit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ******************* interesting ************************


console.log(addOne(5))
function addOne(num) {
    return num + 1
}



addTwo(5)
const addTwo = function(num) {
    return num + 2
}
