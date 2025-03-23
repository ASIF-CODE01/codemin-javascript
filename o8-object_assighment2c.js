// Creating the professor object with basic properties
console.log("==================TASK1=====================");

const professor = {
    name: "Dr. IRON MAN",
    age: 50,
    subject: "Computer Science",
    university: "marvel University",
    department: "ROBOTS AND TECHNOLOGY"
  };

  // Adding a nested object 'degrees'
  professor.degrees = {
    engineering: "CSC",
    PHD: "Adv Computing",
    masters: "Software Engineering"
  };

  
  // Adding an array 'certificates'
  professor.certificates = [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming"
  ];

  // Logging initial object
  console.log("Initial Professor Object:", professor);
  
  // Adding a new property 'totalExperience'
  professor.totalExperience = "14 years";
  console.log("\nAfter adding totalExperience:", professor);
  
  // Modifying an existing property (changing age)
  professor.age = 55;
  console.log("\nAfter modifying age:", professor);
  
  // Adding a new certificate at index 2
  professor.certificates.splice(2, 0, "Oracle Certified");
  console.log("\nAfter adding 'Oracle Certified' at index 2:", professor.certificates);
  
  // Logging the last element of 'certificates' array
  console.log("\nLast certificate:", professor.certificates[professor.certificates.length - 1]);
  
  // Logging the complete object using a for-in loop
  console.log("\nLogging complete professor object using for-in loop:");
  for (let key in professor) {
    console.log(`${key}:`, professor[key]);
  }
  