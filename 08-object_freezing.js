
console.log(`====== Get Keys and Values ========`);
let emp = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}
const keys = Object.keys(emp);
console.log(keys);
const values = Object.values(emp);
console.log(values);

console.log(`===== Object Freezing =========`);
const employee = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}
console.log(employee);
Object.freeze(employee);
employee.city = "Mumbai";
employee.designation = "Developer";
console.log(employee);