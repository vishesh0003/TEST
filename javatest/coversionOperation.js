// ********************************************** Conversions **************************************************//

let score = "33abc"

console.log(typeof score);
console.log(typeof (score))

let valueInnumber = Number(score);
console.log(typeof valueInnumber);

console.log(valueInnumber);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
// "Vishesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

// ********************************************** Operations **************************************************//

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "Hello"
let str2 = " Vishesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log( (1 + 2) * 9); // always use parethesis () //

let trueValue = true
let yoValue = Boolean(true)

console.log(yoValue);

let num1,num2,num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);













