const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// 1. Find the sum of all numbers (Traditional way)
let sumTraditional = 0;
for (let num of array_numbers) {
    sumTraditional += num;
}
console.log("Sum using traditional way:", sumTraditional);

// 1. Find the sum of all numbers using reduce()
const sumUsingReduce = array_numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum using reduce():", sumUsingReduce);

// 2. Find numbers multiple of 5 and sum them using filter + reduce
const sumMultiplesOf5 = array_numbers
    .filter(num => num % 5 === 0)  // Filter multiples of 5
    .reduce((acc, num) => acc + num, 0); // Sum them using reduce

console.log("Sum of numbers that are multiples of 5:", sumMultiplesOf5);
