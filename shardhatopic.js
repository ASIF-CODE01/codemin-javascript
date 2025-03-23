// the sum of n number 

var sum=0;

for (let i = 0; i <=5 ; i++) {

    sum=sum+i;

}
console.log("THE SUM OF N NUMBER",sum);


//  var is a global 
// let is to be limited on for loop
// infinite loop : loops are never ending i  the infine loop 


var i=1;

do {
 console.log("i=",i);
 i++;
    
    
} while (i<=29);

// first all the recors are false condition will be not work

//   we  are print the elment are  0 to  100 alll even number

var i=0;
do {
console.log(`the even number is 0 to 100 ${i}`);
i=i+2;

    
} while (i<=100);


let char =" asif shaikh";
let greetslice=char.slice(0,5);
console.log(`  0 and 5 number is element name: ${greetslice}`);

//   asif i am asking one simple question if you have preapared this question i will hire u in big company i will aproch in big company

let shardha= "apana college"; 
let slice =shardha.slice(0,6);
console.log(`the element will be cut ${slice}`);

let fullName=prompt("enter your full name without spaces")
console.log(`enter the full name ${fullName}`);









