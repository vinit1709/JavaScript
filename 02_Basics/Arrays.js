// Arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['Naruto','Goku','Sasuke','Kakashi']
const myArr2 = new Array(1, 2, 3, 4)


// console.log(myArr[1]);

// Array methos

// myArr.push(6)    // push opration add value in last of array. 
// myArr.push(7)
// myArr.pop()     // pop operation automatically remove last value of array.

// myArr.unshift(9)   // unshift operation add value in first of array.
// myArr.shift()       // shift operation use to remove first value of array.

// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice operation just display values of array, it can't manipulate(change) orignal array!!  

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // splice operations manipulate orignal array.
// splice operation remove value from array who pass as parameter in splice.

// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)   // push operation push data on existing Arrays.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) 
// concat opration add data and give new Array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// most pepole use this type to join two array.
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// isArray operation check pass argument is Array or Not!!
// console.log(Array.isArray("vinit"));  

// From operation convert pass argument in Array.
// console.log(Array.from("vinit")); 
// console.log(Array.from({name: "Vinit"}));  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// of operation create a new array.
console.log(Array.of(score1, score2, score3));
