/*let score = "33abc"
let score = true

console.log(score);
console.log(typeof score);

let convertIntoNumber = Number(score)

console.log(typeof convertIntoNumber);
console.log(convertIntoNumber);

"33"  => 33
"33abc" => NaN
true => 1; false => 0


let isLogedIn = 0

let convert = Boolean(isLogedIn)

console.log(typeof convert);
console.log(convert);

1 => true; 0 => false
"" => false
"Hi" => true


let number = 33;

let stringNum = String(number)

console.log(stringNum);
console.log(typeof stringNum);


*/


let score = "33" // String

let converted = Number(score) // Number

console.log(score);
console.log(typeof score);

console.log(converted);
console.log(typeof converted);


//Types of Conversion Auto Conversion

let num = "5" + 2

console.log(num);  // 52 because when we use + with string so that was concat 


let number = "5" - 3

console.log(number); // 3 because - is auto convert string into number



// String to Number

console.log("123");
console.log("123abc");
console.log("12.5");

// Number("abc") => Invalid Conversion


// Number to String

String(12)
(123).tostring


Boolean(1) // true
Boolean(0) //false
Boolean("") // false
Boolean("hi")  //true

// Falsy values

// 0
// ""
// null
// undefined
// NaN
// false




