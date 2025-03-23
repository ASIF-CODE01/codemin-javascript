// Type: Function with no argument or parameter and no return value
function test(){
    console.log("Test");  
}

test(); // Invocation or function call

// Type 2: Function with argument or parameter and no return value
function square(num){
    console.log(`Finding the square: ${num}`);
    var result = num * num;
    console.log(`Square is: ${result}`);   
}
square(8);
square(19);
function fullName(firstName, middleName, lastName){
    console.log(`Full name is: `);
    var result = firstName + middleName + lastName;
    console.log(result); 
}
fullName("Gajanan ", "Prabhakar ", "Kharat");

function square2(square){

    
    console.log(`square of this number:${square}`);
        var result2 = square*square;
        console.log(`the final result is ${result2}`);
        
}
square2(3);


function square3(){

         for await (const element of object) {
            
         }
}