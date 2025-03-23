const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// 1. Numbers greater than 50
const greaterThan50 = arrayNumbers.filter(num => num > 50);
console.log("Numbers greater than 50:", greaterThan50);

// 2. Even numbers
const evenNumbers = arrayNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 3. Odd numbers
const oddNumbers = arrayNumbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// 4. Numbers multiple of 5
const multiplesOf5 = arrayNumbers.filter(num => num % 5 === 0);
console.log("Multiples of 5:", multiplesOf5);

// 5. Numbers between 20 and 50
const between20and50 = arrayNumbers.filter(num => num >= 20 && num <= 50);
console.log("Numbers between 20 and 50:", between20and50);
