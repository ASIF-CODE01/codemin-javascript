const student = {
    name: "Jenny",
    city: "Pune",
    age: 24,
    pin: 411057,
    country: "India",
    isMarried: true
}

// its important code 
// let { name, city, age, country, isMarried} = student;
// console.log(name, city,age,country, isMarried);

// const student = {
//     name: "Jenny",
//     city: "Pune",
//     age: 24,
//     pin: 411057,
//     country: "India",
//     isMarried: true
// }

// let { name, city, age, country="USA", isMarried, marks=0} = student;
// console.log(name, city,age,country, isMarried);
// console.log(marks);

const [n1, n2, n3="MyLove", n4=1]= ["Jenny", "Elon", "Stew"];
console.log(n1,n2,n3,n4);