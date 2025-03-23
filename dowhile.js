

// let count = 0;
// let num = 1;

// // we are using the result because the trim the space 
// let result = "";     

// while (count < 15) {
//     result+= num + " ";
//     num += 2;
//     count++;
// }

// console.log(result.trim());



let count = 0;  // To count how many even numbers we print
let num = 2;    // Start from the first even number
let result = ""; // Store the result as a string

while (count < 10) {  
    result += num + " "; // Append the number followed by a space
    num += 2; // Move to the next even number
    count++; // Increment the count
}

console.log(result); // Print the final output

