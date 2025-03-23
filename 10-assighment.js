// JSON data stored in backticks as a string
const jsonData = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;

// Convert JSON string to JavaScript object
const employee = JSON.parse(jsonData);

// Log role 'Dev'
console.log(employee.role[0]); // Output: DEV

// Log only last name 'Melon'
console.log(employee.name.split(" ")[1]); // Output: Melon

// Log only joining year '2019'
console.log(employee.doj.split("-")[2]); // Output: 2019
