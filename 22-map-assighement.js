
console.log("======================task 1=================================");

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

// 1. Add 10 to each element
const addTen = arrayNumbers.map(num => num + 10);
console.log("After adding 10:", addTen);

// 2. Cube each element

console.log("======================task 2=================================");
const cubeNumbers = arrayNumbers.map(num => num ** 3);
console.log("Cubed values:", cubeNumbers);

// 3. Add the index value to the corresponding element
console.log("======================task 3=================================");
const addIndex = arrayNumbers.map((num, index) => num + index);
console.log("After adding index:", addIndex);
