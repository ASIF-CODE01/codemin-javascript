var i=90;
while (i>=90) {
    
}

var index = 10;
do {
    console.log(index);
    index=index+10;
} while (index<=100);


console.log("=====WAP to print te table of 5 =========");
// initialization i=5
// condition i<=50
// update Expression i+5
var i = 5;
while (i<=50) {
    console.log(i); //5
    i=i+5;
}

console.log(`===== break =======`);
for (let index = 0; index <= 10; index++) {
    console.log(index);
    if (index==5) {
        break;
    }   
}

// we use the continue statemnet 
console.log(`======= continue ============`);
for (let index = 0; index <= 5; index++) {
    console.log(`Start ${index}`);
    if (index==2) {
        continue;
    }
    console.log(`End ${index}`);
}