let employee = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}

// let student = {};
// student = employee; // Shallow Clone

const clonedObject = Object.assign({}, employee);
console.log(employee);
console.log(clonedObject);
// mergr the objecet 
console.log("======= Merge Objects =========");
let std = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}

const address = {
    street: "SB Road",
    pin: "112233"
}
const mergedObject = Object.assign({}, std, address);
console.log(mergedObject);