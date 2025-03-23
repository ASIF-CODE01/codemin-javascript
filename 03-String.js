var strOne = "Hello";
var strTwo = " Good Morning";
var resultConcat = strOne.concat(strTwo);
console.log("String one: ", strOne, " String two: ", strTwo, " Concat Result: ",resultConcat );
console.log(` String one: ${strOne}, String two: ${strTwo}, Concat Result:${resultConcat}  `);

var greet = "Good Morning";
var indexOfM = greet.indexOf("M");
console.log(`Index of char M: ${indexOfM}`);

var replaceResult = greet.replace("Morning", "Evening");
console.log(`Replace result is: ${replaceResult}`);
var city = "  Pune  ";
console.log(`Before trim: ${city}, and it's length: ${city.length}`);
var trimResult = city.trim();
console.log(`After trim: ${trimResult}, and it's length: ${trimResult.length}`);

console.log(` Count the total number of spaces available in the start and in the end `);
var totalSpaces = city.length - trimResult.length;
console.log(`Total spaces available: ${totalSpaces}`);
var country = "   Unites States Of America  ";
var trimStartResult = country.trimStart(); // "Unites States Of America  "
console.log(` Total spaces available in the start is: ${country.length - trimStartResult.length}`);

var age = 22;
console.log(` Age ${age}, ${typeof(age)} `);
var ageString = age.toString();// "22"
console.log(` Age string: ${ageString}, data type: ${typeof(ageString)}`);

var greet = "Good Evening";
var greetSlice = greet.slice(0,4);
console.log(`Slice 0, 4 : ${greetSlice}`);

var bankname

// String Template Backtick `, $, {}