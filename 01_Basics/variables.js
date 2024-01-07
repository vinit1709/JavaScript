// Const variable can't change.
const accountId = 144553

// these three can be changed.

let accountEmail = "ljclg10@gmail.com"

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/
var accountPassword = "12345"

// it can be possible to declare variable like this But, I suggest Can't use this type
accountCity = "Ahmedabad"


// Let's try to change this const variable..
// accountId = 2     // this is not allowed!!
accountEmail = "haha@ha.com"
accountPassword = "12121212"
accountCity = "Dholka"

// Look in this account Email,Password & City Name are changed but, accound Id can't
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// this is secound way to print in console in table formate.
console.table([accountId,accountEmail,accountPassword,accountCity])