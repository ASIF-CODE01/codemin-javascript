const sum=[85,97,44,37,76,60];

  let sum2=0;

  for (let i= 0; i < sum.length; i++) {
    const element = sum[i];

    
      sum2=sum2+element
      console.log(sum2);
      
    
  }

     let avr=sum2/sum.length;
     console.log(`the averge of total mark is= ${avr}`);

     const arrayNum = [2, 3, 4, 5, 6, 9, 1];
const array = arrayNum.map((element)=>{
    return element * element;
});
console.log(array);

//  FIND THE MAXIMUM NO OF ELEMENT 
 let marks =[32,75,98,45,79,66,97,96,97];

        const result=marks.filter((val)=>{
            return val>90
        })

        console.log(result);
        
     
  
  