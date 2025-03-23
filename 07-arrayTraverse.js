console.log("====== find the sum of the element to given array=======");

  const array = [2,3,9,4,4,6,6,3];
  let sum=0;
  for(let index = 0; index < array.length; index++) {
    const element = array[index];
    sum=sum+element
      console.log(element);
  }
  console.log(sum);

console.log("=======even number from the element =======");

     const array2=[2,30,50,60,70,60,10,30,45];
     
      for (let index = 0; index < array2.length; index++) {
        const element = array2[index];

        if (element%2==1) {
          console.log(element);  
          
        }
        
      }
  

         console.log("======= find the odd number and sum of odd number  ======");
         
      const array3=[21,43,44,78,90,32,54];
      let add=0;
      for (const element of array3) {

      if (element%2==1) {

      

        
        
        add=add+element
        console.log(element);
        console.log(add);
        
      
      }
      
       
      }
      console.log("====array reverse traveelling=======");

       let array1 = [1,2,5,6,8];

       let array4= [2,4,6,8,0];

       let array5=array1.concat(array4);

       console.log(array5);
       


      
    
      

  
  
  

  
