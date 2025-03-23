
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function countPrimes(arr) {
//     return arr.filter(isPrime).length;
// }

// const array = [3, 9, 7, 6, 19, 29, 53];
// console.log("Total Prime Numbers:", countPrimes(array));

function spaceCount(str) {
    return str.split(" ").length - 1;
}

console.log("revesion is the mother of sucess");


console.log(spaceCount("Revision is the mother of success"));  // Output: 5

console.log("JavaScript is the language of internet world");


console.log(spaceCount("JavaScript is the language of internet world")); // Output: 7

const array = [3, 9, 7, 6, 19, 29, 53];
let primeCount = 0;
let primeNumbers = []; // To store prime numbers

for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let isPrime = true;

    if (num < 2) isPrime = false; // 1 is not a prime number

    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeCount++;
        primeNumbers.push(num); // Store prime numbers
    }
}

// Display output in the required format
console.log(`Total Prime Numbers: ${primeCount} (Prime numbers: ${primeNumbers.join(", ")})`);






