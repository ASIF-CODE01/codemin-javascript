// Defining Vehicle class
console.log("============TASK1=================");

class Vehicle {
    constructor(brand, model, year, fuelType, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.price = price;
    }

    // Method to log vehicle details
    logDetails() {
        console.log(`Vehicle Details: ${this.year} ${this.brand} ${this.model}, Fuel Type: ${this.fuelType}, Price: ${this.price}`);
    }
}

// Creating 5 objects of Vehicle class
const vehicle1 = new Vehicle("Toyota", "Camry", 2022, "Petrol", 25000);
const vehicle2 = new Vehicle("Honda", "Civic", 2021, "Diesel", 22000);
const vehicle3 = new Vehicle("Tesla", "Model 3", 2023, "Electric", 40000);
const vehicle4 = new Vehicle("Ford", "Mustang", 2020, "Petrol", 35000);
const vehicle5 = new Vehicle("BMW", "X5", 2023, "Hybrid", 60000);

// Logging vehicle details
vehicle1.logDetails();
vehicle2.logDetails();
vehicle3.logDetails();
vehicle4.logDetails();
vehicle5.logDetails();

 console.log("=================TASK2 ===================");
 
// Defining College class
class College {
    constructor(name, location, establishedYear, coursesOffered) {
        this.name = name;
        this.location = location;
        this.establishedYear = establishedYear;
        this.coursesOffered = coursesOffered;
    }

    // Method to display college details
    display() {
        console.log(`College Name: ${this.name}, Location: ${this.location}, Established: ${this.establishedYear}, Courses: ${this.coursesOffered.join(", ")}`);
    }
}

// Creating 4 objects of College class
const college1 = new College("MIT", "USA", 1861, ["Computer Science", "Engineering", "AI"]);
const college2 = new College("Harvard", "USA", 1636, ["Law", "Medicine", "Business"]);
const college3 = new College("Oxford", "UK", 1096, ["Physics", "Mathematics", "Literature"]);
const college4 = new College("IIT Bombay", "India", 1958, ["Engineering", "Technology", "Data Science"]);

// Invoking display() method for each object
college1.display();
college2.display();
college3.display();
college4.display();
