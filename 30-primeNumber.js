function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }   
    }
    return true;
}
var result = isPrime(7);
console.log(`Is 7 prime number: ${result}`);

var result = isPrime(15);
console.log(`Is 15 prime number: ${result}`);




function isprime2(num){

    for(let index=2; index<num; index++){

        if(num%index==0){
            return false;
        }
    }
    return true;

}

     
    var result= isprime2(7);

    console.log(result);
    

     function primeornot(number){

        for(let index=2;index<=number.length-1;index++){

               if(number%index===0){

                return false;

               }
        }
        return true;

     }

     var result=primeornot(45);
      console.log(`the number will be ${result}`);
      