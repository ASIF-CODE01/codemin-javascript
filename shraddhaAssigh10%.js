// i want the off 10% each iteams 

let items=[200,800,700,400,500,900];

for (let i = 0; i < items.length; i++) {
    
    let offer= items[i]/10;

    items[i]=items[i]-offer;
    // items-=offer
    
}
console.log(items);


// .fir


//   i want the discount this atom
 let  atoms=[200,400,500,600,900,20000];

 for (let i = 0; i< atoms.length; i++){

    offer=atoms[i]/10;
    
   atoms[i]=atoms[i]-offer;
   
    
 }
 console.log(atoms[i]);


  function example(){
      const x=30;
      x=20;
  }
  example();
 