console.log("***************TASK 1******************");
console.log("GRATEST NUMBER AMONGEST TWO NUMBER");

 var greaterNumber = function(n1,n2){

      var result= n1>n2? n1:n2;
       console.log(`the greater number is ${result}`);  
 }
 greaterNumber(10,-10);
 greaterNumber(800,899);

 console.log("***********************TASK2*******************");
 console.log("CHECK THE EVEN OR ODD NUMBER");

  var isEvenOddNumber= function(num){

       var result= (num%2==0 )? true: false;
       return result;

  }
 var returnValue = isEvenOddNumber(29);
 console.log(`the number 29 is: ${returnValue}`);

 var returnnumber =isEvenOddNumber(44);
 console.log(`the number 44 is:${returnnumber}`);

 var returnvalue=isEvenOddNumber(0);
 console.log(`the number 0 is :${returnValue}`);

 var returnvalue=isEvenOddNumber(101);
 console.log(`the number 0 is :${returnValue}`);


 console.log("=============task 3==============");
 console.log("==============find the length of given word ===============");
 
 
 var wordLength = function(word){
          var result=(word.length%2 == 0) ? "EVEN": "ODD";
          return result;

 }
  var result= wordLength("javaScript");
  console.log(`the given javaScript word is : ${result}`);

  var result= wordLength("devloper");
  console.log(`the given devloper word is : ${result}`);

  var result=wordLength("google");
  console.log(`the given google word is :${result}`);
  

  

  
  


 
 
 

 

 
 

