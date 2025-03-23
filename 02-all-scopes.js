if (true) {
    var blockVar = "Sirf is block ke andar available!";
    console.log(blockVar); // ✅ Accessible inside block
}

 console.log(blockVar); // ❌ ReferenceError: blockVar is not defined
//    var se hum block ke bhar bhi acess kar sakte he 


if (true){

    var blockva="i understand this ";
    console.log(blockva);
    
}

  console.log(blockva);

//   we are acess the var element out side the function but we cannot access the 

function add(a,b){

    return a+b;

}
  let result=  add(5,10);
  console.log(result);


  function addition(a,c){

    return a+c;
    
    

  }
  var result1= addition(685+100);
  console.log(result1);
  
  
