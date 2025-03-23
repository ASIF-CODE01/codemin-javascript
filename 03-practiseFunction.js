
var greet="good morning";
   var index=greet.indexOf("m");
   console.log(`index of char m:${index}`);
   

   var city ="  pune  ";
   console.log(`count the total number of available element :${city}`);


   // WE ARE FINDING THE LENGTH AND ALSO FIND THE SPACES LENGTH
   
    var city=" pune  ";
    city.trim();
    console.log(`before trim: ${city}  and its length ${city.length}`);
    
    console.log(`count the total number of spaces availble in the start and in the end `);

    var country =" united state of America "
    var trimResult=country.trimStart();
    console.log(`total space available in the start is :${country.length-trimResult}`);

   // what is the tostring - tostring convert the data type

     var age=22;
     console.log(`AGE ${age} ,${typeof(age)}`);
     var ageString=age.toString();
     console.log(`age string ${ageString},data type: ${typeof(ageString)}`);


     var age =55;
     console.log(`AGE IS:${age} ${typeof(age)}`);
     var ageString=age.toString();
     console.log(`age string ${ageString} ${typeof(ageString)}`);
     

     var greet = " is it possible ";
    var result=greet.includes("poss");
    console.log(`result of includes is: ${result}`);

    var greet="john cena ";
    var result=greet.includes("rock");
    console.log(`result of includes is : ${result}`);

    var greet="good evening ";
    var resullt=greet.slice(0,5);
    console.log(`slice is 0,5: ${resullt}`);

    //    if you have to chcek the data type we are using the type of 
      var age=25;
      console.log(`age is ${age} the age type is ${typeof(age)}`);
      

       let name="gajanan kharat";

          let result2=name.includes("asif");
          console.log(result2);
          
    
    //  IF I WANT THE CUT PERTICUALR ARE I AM USING THE SLICE 
     

     
    