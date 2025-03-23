    let arrayNum = [10,20,39,49,50,60];
    console.log("total number of element ",arrayNum);
    console.log(`the length of array ${arrayNum.length}`);

    //  the acess of the element 

      const element=arrayNum[4];
      console.log(`the index 4 of the element ${element}`);

    //     we can update very easily 
      arrayNum[5] = 70;
      console.log(`after update `);
      console.log(`${arrayNum}`);
      

    //   add the first and laast the element 
    arrayNum.push(20);
    arrayNum.unshift(90);
    console.log(arrayNum);
    
//   del the last element  
    arrayNum.pop();
    console.log(arrayNum);

    // del the first element 
    arrayNum.shift();
    console.log(arrayNum);
// splive is the important role del if i use the splice(4)  so all the del elment in index start to emd 
    const array =[10,203,40,50,60,70];
       constslice=array.splice(2);
       console.log(constslice);
    console.log(array);

    const array2=[20,30,40,50,60,70];
    console.log(array2);
     const_array= array2.splice(4);
     console.log(`after del the element ${const_array}`);
     console.log(array2);

    //      slice method work the only is seelect   
     console.log("++++++++++++++without deleting the element splice+++++++++");

     const array3=[10,20,30,40,50,60,];
     console.log(array3);
     

    //   asif you have to insert any element without deleting any value 

        CONST2=array3.splice(3,0,283,66);
        console.log(CONST2);
        console.log(array3);

        //   add the element by deleting and existing the element 

        //   splice method work on if i want any del any element and any element as well as without del any element we can add the element

        const arrayfour=[39,40,40,59,50,60,40];
        console.log(arrayfour);
        
        const3= arrayfour.splice(3,4,900);
        console.log(const3);
        console.log(arrayfour);
        
        

        
        

     
     
     
    
    
       
    
    
      
      
      
    
    