//Arrow Function - With no args or parms and no return values
let add = () => {
    console.log("Addition");
}
add();

// AF with arguments and no return value
let addition = (p1, p2=0) => {
   console.log(`Addition: ${p1+p2}`);
}
addition(10, 20);
addition(40);

// AF with arguments and return value



const cube = (num) => {
    let result = num ** 3;
    return result;
}

let cubeResult = cube(7);
console.log(cubeResult); // Output: 343

